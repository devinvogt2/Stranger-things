import styled from "styled-components";

export const PostCardContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2em;
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 1em;
    justify-content: space-between;
  }
  & h4 {
    padding: 1em 0 0.5em 0;
    margin: 0;
  }
  & .date {
    font-size: 10px;
  }
  & .toggleEdit,
  & .modifyPost {
    margin-top: 2em;
    font-size: 12px;
    padding: 1em 0;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
  & .modifyPost {
    margin-top: 0;
    padding-top: 0;
    color: ${({ type }) => (type === "reactivate" ? "green" : "red")};
  }
`;
