import styled from "styled-components";

export const FormField = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 14px;
    margin-top: 1em;
  }
  &:last-child {
    margin-top: 2em;
  }
  & > textarea {
    resize: vertical;
    width: 100%;
    overflow: scroll;
    border: 1px solid lightgrey;
    padding: 0.5em;
  }
  & > label {
    margin-bottom: 0.5em;
    font-size: 12px;
  }
  & > input {
    border: 1px solid lightgrey;
  }
  & > input,
  & + input[type="submit"] {
    height: 2.5em;
    padding: 0.5em;
    border-radius: 5px;
    width: 220px;
  }
  & + input[type="submit"] {
    margin-top: 3em;
  }
`;
