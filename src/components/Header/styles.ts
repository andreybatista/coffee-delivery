import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  /* position: absolute; */
  height: 104px;
  width: 100%;

  left: 0;

  font-size: 0.875rem;

  nav {
    display: flex;
    gap: 0.75rem;

    .box {
      color: ${(props) => props.theme["purple"]};
      background-color: ${(props) => props.theme["purple-light"]};

      border-radius: 0.375rem;
      padding: 0.5rem;
      gap: 0.25rem;

      display: flex;
      align-items: center;
    }

    span {
      color: ${(props) => props.theme["purple-dark"]};
    }

    .cart {
      width: 38px;
      height: 38px;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme["yellow-dark"]};
      background-color: ${(props) => props.theme["yellow-light"]};

      border-radius: 0.375rem;
      padding: 0.5rem;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
    }
  }
`;
