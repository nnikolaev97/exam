package com.drpicox.game.rest.blog;

import com.fasterxml.jackson.annotation.JsonValue;

import java.util.LinkedHashMap;
import java.util.List;

public class PostListResponse {

    private final List list;

    public PostListResponse(List list) {
        this.list = list;
    }

}
