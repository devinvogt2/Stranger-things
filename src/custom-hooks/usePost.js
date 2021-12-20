import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function usePost() {
  const { isLoggedIn } = useContext(AuthContext);
  return { isLoggedIn };
}
