import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../../constants";

export function useMyPosts() {
  const { me, selectedPost, setSelectedPost, updateMe, token } =
    useContext(AuthContext);
  let { posts } = me || {};
  const [error, setError] = useState(null);

  const removePost = async (postId) => {
    const ok = confirm(
      `You have chosen to delete this post. Warning! This action cannot be undone. Are you sure?`
    );

    if (!ok) return;

    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { success, error } = await response.json();

      if (success) {
        setError(null);
        // optimistic update that will be reversed by updateMe()
        // if tx fails
        posts = posts.filter((post) => post._id !== postId);
        updateMe();
      } else {
        setError(error);
      }
    } catch (ex) {
      console.error(ex);
    }
  };

  // if we were able to reactivate posts (recover from soft delete)
  // this is what we could do: patch request and flip active boolean back to true
  /* const reactivatePost = async (post) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${post._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ post: { ...post, active: true } }),
      });
      const { success, error, data } = await response.json();

      if (success) {
        setError(null);
        posts = posts.map((post) =>
          post.id === data.post._id ? data.post : post
        );
        updateMe();
      } else {
        setError(error);
      }
    } catch (ex) {
      console.error(ex);
    }
  }; */

  if (!posts) return {};

  return {
    error,
    posts,
    selectedPost,
    setSelectedPost,
    removePost,
    /* reactivatePost, */
  };
}
