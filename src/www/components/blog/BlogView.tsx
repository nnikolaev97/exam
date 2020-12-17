import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostList } from "www/ducks/blog";
import { setView } from "www/ducks/view";

export function BlogView() {
  const dispatch = useDispatch();
  const list = useSelector(getPostList);
  const go = (postId: string) =>
    dispatch(setView({ root: "BlogPost", postId }));

  return (
    <ul>
      {list.map((post) => (
        <li key={post.id} onClick={() => go(post.id)}>
          <span role="button">{post.title}</span> »
        </li>
      ))}
    </ul>
  );
}
