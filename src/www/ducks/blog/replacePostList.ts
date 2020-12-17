import { BlogState } from "./BlogState";

export const REPLACE_POST_LIST = "blog/REPLACE_POST_LIST";
export function replacePostList(list: BlogState["blog"]["list"]) {
  return {
    type: REPLACE_POST_LIST,
    list,
  };
}
