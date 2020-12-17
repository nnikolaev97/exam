package com.drpicox.game.blog;

import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileReader;
import java.io.LineNumberReader;
import java.net.URL;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

@Component
public class BlogController {

    public List<Post> listAll() throws Exception {
        var result = new LinkedList<Post>();

        var files = getResourceBlogFiles();
        for (File f : files) {
            var id = f.getName().split("\\.")[0];
            var title = getTitle(f);
            result.add(new Post(id, title));
        }
        Collections.sort(result);
        return result;
    }

    public Post getPost(String postId) throws Exception {
        var path = getBlogPath();
        var file = new File(path, postId + ".md");
        var title = getTitle(file);
        var body = getBody(file);

        return new Post(postId, title, body);
    }

    private String getTitle(File f) throws Exception {
        var fr = new FileReader(f);
        var lr = new LineNumberReader(fr);
        var title = lr.readLine().substring(2);
        lr.close();
        fr.close();
        return title;
    }

    private String getBody(File f) throws Exception {
        var body = new StringBuilder();
        var chars = new char[4096];

        try (var fr = new FileReader(f)) {
            var count = fr.read(chars);
            while (count > 0) {
                body.append(chars, 0, count);
                count = fr.read(chars);
            }
        }

        return body.toString().replaceAll("\r", " ");
    }

    private File[] getResourceBlogFiles() {
        String path = getBlogPath();
        return new File(path).listFiles();
    }

    private String getBlogPath() {
        ClassLoader loader = Thread.currentThread().getContextClassLoader();
        URL url = loader.getResource("blog");
        return url.getPath().replaceAll("%20", " ");
    }
}
