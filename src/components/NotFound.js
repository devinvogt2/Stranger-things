import React from "react";
import { Link } from "react-router-dom";
import { CenterLayout } from "./util";
import styled from "styled-components";

const BigText = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

export default function NotFound() {
  return (
    <CenterLayout>
      <BigText>404</BigText>
      <div>Sorry, nothing here!</div>
      <br />
      <Link to="/home">Back</Link>
    </CenterLayout>
  );
}
