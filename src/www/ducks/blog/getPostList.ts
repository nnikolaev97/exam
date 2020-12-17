import { BlogState } from "./BlogState";

export function getPostList(state: BlogState): BlogState["blog"]["list"] {
  return state.blog.list;
}
