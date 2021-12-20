import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useParams, useHistory } from "react-router-dom";
import { useQueryParams } from "../custom-hooks";
import { BASE_URL } from "../../constants";

export function useCreateMessage() {
  const { token, me } = useContext(AuthContext);
  const { postId } = useParams();
  const title = useQueryParams("title");
  const history = useHistory();

  const [form, setForm] = useState({
    content: "",
  });
  const [error, setError] = useState(null);

  const isMyPost = me?.posts?.some((post) => post._id === postId);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message: form }),
      });

      const { error, success } = await response.json();

      if (success) {
        setError(null);
        history.push("/posts");
      } else {
        setError(error);
      }
    } catch (ex) {
      console.error(ex);
    }
  };

  const cancel = () => history.push("/posts");

  return {
    error,
    isMyPost,
    handleChange,
    handleSubmit,
    postId,
    title,
    form,
    cancel,
  };
}
