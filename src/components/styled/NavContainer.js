import styled from "styled-components";

export const NavContainer = styled.nav`
  & {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.8em;
    padding: 1em;
  }
  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    padding-left: 2em;
  }
  & > a:last-child {
  }
  & > a.active {
    color: blue;
    font-weight: bold;
  }
`;
