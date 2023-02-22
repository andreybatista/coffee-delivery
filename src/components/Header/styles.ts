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

      position: relative;

      .countItemCart {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 0px;

        position: absolute;
        width: 20px;
        height: 20px;
        right: -8.35px;
        top: -8px;

        background: ${(props) => props.theme["yellow-dark"]};
        border-radius: 1000px;

        flex: none;
        order: 1;
        flex-grow: 0;
        z-index: 1;

        span {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          font-size: 0.813rem;
          line-height: 130%;

          text-align: center;
          letter-spacing: -0.06em;

          color: ${(props) => props.theme["white"]};
        }
      }
    }
  }
`;
