import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SendMessageContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  color: blue;
  text-decoration: underline;
`;

export default function SendMessage({ title, postId }) {
  // pass title via query params, access with useQueryParams hook on CreateMessage route
  return (
    <SendMessageContainer to={`/me/messages/${postId}?title=${title}`}>
      Message the owner
    </SendMessageContainer>
  );
}
