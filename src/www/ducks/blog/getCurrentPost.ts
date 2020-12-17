import { BlogState } from "./BlogState";

export function getCurrentPost(
  state: BlogState
): BlogState["blog"]["currentPost"] {
  return state.blog.currentPost;
}
