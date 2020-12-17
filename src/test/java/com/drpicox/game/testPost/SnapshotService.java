package com.drpicox.game.testPost;

import com.google.gson.Gson;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.nio.charset.StandardCharsets;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@Component
public class SnapshotService {
    private final MediaType APPLICATION_JSON = new MediaType(MediaType.APPLICATION_JSON.getType(),
            MediaType.APPLICATION_JSON.getSubtype(),
            StandardCharsets.UTF_8);

    private WebApplicationContext context;

    private MockMvc mockMvc;
    private final Gson gson;
    private final Map<String,List<Snapshot>> snapshots = new LinkedHashMap<>();
    private Snapshot lastSnapshot;
    private String currentPostId;
    private String currentTestName;

    public SnapshotService(WebApplicationContext context, @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection") Gson gson) {
        this.gson = gson;
        this.context = context;
    }

    public <T> T get(String url, Object body, Class<T> classOfT) {
        var snapshot = new Snapshot("GET", url, gson.toJson(body));
        var request = MockMvcRequestBuilders.get(url);
        return send(request, snapshot, classOfT);
    }

    public <T> T put(String url, Object body, Class<T> classOfT) {
        var snapshot = new Snapshot("PUT", url, gson.toJson(body));
        var request = MockMvcRequestBuilders.put(url);
        return send(request, snapshot, classOfT);
    }

    public void post(String url, Object body) {
        post(url, body, Object.class);
    }

    public <T> T post(String url, Object body, Class<T> classOfT) {
        var snapshot = new Snapshot("POST", url, gson.toJson(body));
        var request = MockMvcRequestBuilders.post(url);
        return send(request, snapshot, classOfT);
    }

    private <T> T  send(MockHttpServletRequestBuilder request, Snapshot snapshot, Class<T> classOfT) {
        if (lastSnapshot != null)
            throw new AssertionError("Missing SNAPSHOT status=XXX control. There are at least two consecutive snapshots recorded without checking the status value.");

        var body = snapshot.getRequestBody();
        if (body != null)
            request.contentType(APPLICATION_JSON).content(body);

        MvcResult result = null;
        try {
            if (mockMvc == null) mockMvc = MockMvcBuilders.webAppContextSetup(context).build();

            result = mockMvc.perform(request).andReturn();
            var response = result.getResponse();
            var responseStatus = response.getStatus();
            var responseBody = response.getContentAsString();

            if (responseBody.equals("")) responseBody = null;
            snapshot.setResponse(responseStatus, responseBody);
            snapshot.setHandler(result.getHandler());
            snapshot.setResolvedException(result.getResolvedException());
            lastSnapshot = snapshot;

            return gson.fromJson(responseBody, classOfT);
        } catch (Throwable reason) {
            var message = new StringBuilder()
                    .append("Error resolving a REST api call:\n")
                    .append(snapshot.getPrettyPrint())
                    .append("\n");

            throw new AssertionError(message.toString(), reason);
        }
    }

    private Snapshot commitSnapshot() {
        var snapshot = discardSnapshot();
        snapshots.get(currentTestName).add(snapshot);
        return snapshot;
    }

    private Snapshot discardSnapshot() {
        if (lastSnapshot == null)
            throw new AssertionError("Missing snapshot. There are no snapshots, or all snapshots has been commit.");

        var snapshot = lastSnapshot;
        lastSnapshot = null;
        return snapshot;
    }

    public void expectStatusAndSave(int status) {
        var snapshot = commitSnapshot();
        expectStatus(snapshot, status);
    }

    private void expectStatus(Snapshot snapshot, int status) {
        if (snapshot.getResponseStatus() != status)
            throw new AssertionError("Snapshot unexpected response status.\n" +
                    "-expected status     : " + status + "\n" +
                    "-actual status       : " + snapshot.getResponseStatus() + "\n" +
                    snapshot.getPrettyPrint());
    }

    public void expectStatusAndForget(int status) {
        var snapshot = discardSnapshot();
        expectStatus(snapshot, status);
    }

    public void expectNoPendingSnapshot() {
        if (lastSnapshot != null)
            throw new AssertionError("Missing SNAPSHOT status=XXX control. Check that the last snapshot has a status check.");
    }

    public void startTest(String postId, String testName) {
        if (!postId.equals(currentPostId))
            startPostId(postId);

        currentTestName = testName;
        snapshots.put(testName, new LinkedList<>());
    }

    private void startPostId(String postId) {
        currentPostId = postId;
        lastSnapshot = null;
        snapshots.clear();
    }

    public String listJsonSnapshots() {
        expectNoPendingSnapshot();
        return gson.toJson(snapshots);
    }
}
