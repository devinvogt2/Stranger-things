import styled from "styled-components";

export const CardContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2em;
  }
  & > i {
    font-size: 72px;
    color: ${({ active }) => (active ? "green" : "inherit")};
  }
`;
