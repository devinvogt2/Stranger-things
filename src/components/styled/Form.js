import styled from "styled-components";

export const Form = styled.form`
  & {
    display: flex;
    flex-direction: column;
  }
  & button {
    margin-top: 1em;
    padding: 0.5em;
    background-color: black;
    color: white;
    border-radius: 5px;
  }
  & input[type="submit"] {
    height: 2.5em;
    padding: 0.5em;
    border-radius: 5px;
    width: 220px;
  }
`;
