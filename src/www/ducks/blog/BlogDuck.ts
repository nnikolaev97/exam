import { Action } from "redux";
import { set } from "object-path-immutable";
import { ReduxReducer } from "../ReduxReducer";
import { BlogState } from "./BlogState";
import { REPLACE_CURRENT_POST } from "./replaceCurrentPost";
import { REPLACE_POST_LIST } from "./replacePostList";

export class BlogDuck implements ReduxReducer {
  reduce(state: BlogState, action: Action & any): {} {
    if (!state.blog)
      state = set(state, "blog", { list: [], currentPost: null });

    switch (action.type) {
      case REPLACE_CURRENT_POST:
        return set(state, "blog.currentPost", action.currentPost);
      case REPLACE_POST_LIST:
        return set(state, "blog.list", action.list);
      default:
        return state;
    }
  }
}
