import { BlogState } from "./BlogState";

export const REPLACE_CURRENT_POST = "blog/REPLACE_CURRENT_POST";
export function replaceCurrentPost(
  currentPost: BlogState["blog"]["currentPost"]
) {
  return {
    type: REPLACE_CURRENT_POST,
    currentPost,
  };
}
