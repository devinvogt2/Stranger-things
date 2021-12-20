import styled from "styled-components";

export const MyPostsSection = styled.section`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  &:not(:first-of-type) {
    margin-top: 2em;
  }
`;
