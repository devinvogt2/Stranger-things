import styled from "styled-components";

export const PostContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-bottom: 1px solid lightgrey;
    padding: 1em 1em 2em 1em;
    max-width: 600px;
  }
`;
