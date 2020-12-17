package com.drpicox.game.blog;

import com.fasterxml.jackson.annotation.JsonValue;

import java.util.LinkedHashMap;

public class Post implements Comparable<Post> {

    private final String id;
    private final String title;
    private final String body;

    public Post(String id, String title) {
        this(id, title, null);
    }

    public Post(String id, String title, String body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }

    public String getBody() {
        return body;
    }

    @Override
    public int compareTo(Post o) {
        return -id.compareTo(o.id);
    }
}
