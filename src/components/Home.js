import React from "react";
import { CenterLayout } from "./util";
import { SignupOrLoginBtn } from "./styled";
import { useHome } from "../custom-hooks";

export default function Home() {
  const { isLoggedIn, buttons } = useHome();

  return (
    <CenterLayout>
      <h1>Stranger's Things</h1>
      {buttons.map(({ name, to }, idx) => (
        <SignupOrLoginBtn key={idx} to={to}>
          {name}
        </SignupOrLoginBtn>
      ))}
      {!isLoggedIn && (
        <SignupOrLoginBtn to="/posts">Browse Posts</SignupOrLoginBtn>
      )}
    </CenterLayout>
  );
}
