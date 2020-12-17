package com.drpicox.game;

import com.drpicox.game.tools.JsonOld;
import com.google.common.truth.Truth;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static com.drpicox.game.tools.JsonSubject.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ActiveProfiles("test")
@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
public class BlogTest {

    @Autowired private MockMvc mockMvc;

    @Test
    public void there_is_a_list_of_posts_service() throws Throwable {
        var result = mockMvc.perform(get("/api/v1/posts"))
                .andExpect(status().isOk())
                .andReturn();

        var json = new JsonOld(result.getResponse().getContentAsString());
        assertThat(json).at("list").containsMatch(new JsonOld("{" +
                "\"id\": \"2020-08-17_the_game_begins\"," +
                "\"title\": \"The game begins\"" +
                "}"));
    }

    @Test
    public void posts_are_in_date_order() throws Throwable {
        var result = mockMvc.perform(get("/api/v1/posts"))
                .andExpect(status().isOk())
                .andReturn();

        var list = new JsonOld(result.getResponse().getContentAsString()).get("list");
        var size = list.size();
        for (var i = 1; i < size; i++) {
            var d0 = list.get(i-0).get("id").toString();
            var d1 = list.get(i-1).get("id").toString();
            Truth.assertThat(d0).isLessThan(d1);
        }
    }

    @Test
    public void read_one_post_by_id() throws Throwable {
        var result = mockMvc.perform(get("/api/v1/posts/2020-08-17_the_game_begins"))
                .andExpect(status().isOk())
                .andReturn();

        var match = new JsonOld("{" +
                "\"id\": \"2020-08-17_the_game_begins\"," +
                "\"title\": \"The game begins\"" +
                "}");

        var json = new JsonOld(result.getResponse().getContentAsString());
        assertThat(json).matches(match);
        assertThat(json).at("body").asString().startsWith("# The game begins");
        assertThat(json).at("body").asString().contains("Welcome to the Card Game.");
    }

}
