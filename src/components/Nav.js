import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import { useNav } from "../custom-hooks";
import { NavContainer } from "./styled";

export default function Nav() {
  const { setSelectedPost } = useContext(AuthContext);
  const { linkProps, navLinks } = useNav();

  return (
    <NavContainer onClick={() => setSelectedPost({})}>
      {navLinks.map(({ name, icon, to }, idx) => (
        <NavLink key={idx} {...linkProps(name, to)}>
          <i className={"material-icons-outlined"}>{icon}</i>
          <span>{name}</span>
        </NavLink>
      ))}
    </NavContainer>
  );
}
