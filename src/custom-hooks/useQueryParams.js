import { useLocation } from "react-router-dom";

export function useQueryParams(searchKey) {
  const { search } = useLocation();

  return new URLSearchParams(search).get(searchKey);
}
