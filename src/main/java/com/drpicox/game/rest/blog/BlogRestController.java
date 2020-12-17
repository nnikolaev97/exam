package com.drpicox.game.rest.blog;

import com.drpicox.game.blog.BlogController;
import com.drpicox.game.blog.Post;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/posts")
public class BlogRestController {

    private final BlogController blogController;

    public BlogRestController(BlogController blogController) {
        this.blogController = blogController;
    }

    @GetMapping
    public PostListResponse listPosts() throws Exception {
        var list = blogController.listAll();
        var result = new PostListResponse(list);
        return result;
    }

    @GetMapping("/{postId}")
    public Post getPost(@PathVariable String postId) throws Exception {
        return blogController.getPost(postId);
    }
}
