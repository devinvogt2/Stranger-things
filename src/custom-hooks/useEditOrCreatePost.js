import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants";

export function useEditOrCreatePost(selectedPost) {
  const { isLoggedIn, token, updateMe } = useContext(AuthContext);
  const history = useHistory();

  const [form, setForm] = useState(
    selectedPost._id
      ? selectedPost
      : {
          location: "",
          willDeliver: false,
          title: "",
          description: "",
          price: "",
        }
  );

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    if (e.target.type === "checkbox" && e.target.checked) {
      setForm({ ...form, willDeliver: true });
      return;
    }

    if (e.target.type === "checkbox" && !e.target.checked) {
      setForm({ ...form, willDeliver: false });
      return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${BASE_URL}/posts` + (selectedPost._id ? `/${selectedPost._id}` : ""),
        {
          method: selectedPost._id ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ post: form }),
        }
      );

      const { success, error } = await response.json();

      if (success) {
        setError(null);
        updateMe();
        history.push("/posts");
      } else {
        setError(error);
      }
    } catch (ex) {
      console.error(ex);
    }
  };

  return { isLoggedIn, form, handleSubmit, handleChange };
}
