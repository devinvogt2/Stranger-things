import styled from "styled-components";
import { Link } from "react-router-dom";

export const ViewMyContent = styled(Link)`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    border-radius: 5px;
    background-color: black;
    color: white;
    width: 220px;
    margin-top: 2em;
  }
  &:hover {
    background-color: #222222;
  }
`;
