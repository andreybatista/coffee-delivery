import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  position: relative;

  background-color: ${(props) => props.theme["base-card"]};

  padding: calc(1.25rem + 72px) 1.5rem 1.5rem;
  border-radius: 0.375rem 2.25rem;

  img {
    position: absolute;
    left: 50%;
    top: -20px;
    transform: translateX(-50%);
    width: 120px;
    height: 120px;
  }

  h2,
  p,
  span {
    text-align: center;
    display: block;
  }
  .categoryList {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding-top: 0.5rem;
    gap: 0.25rem;

    margin-top: 0.75rem;
    margin-bottom: 1rem;

    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 130%;

      text-transform: uppercase;
      /* Brand / Yellow Dark */

      color: ${(props) => props.theme["yellow-dark"]};
      background: ${(props) => props.theme["yellow-light"]};

      border-radius: 100px;
      padding: 0.25rem 0.5rem;
    }
  }

  h2 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    text-align: center;
    color: ${(props) => props.theme["base-subtitle"]};

    margin-bottom: 0.5rem;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    text-align: center;
    color: ${(props) => props.theme["base-label"]};
    margin-bottom: 2.063rem;
  }

  .buy {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 29px;

    p {
      display: flex;
      align-items: baseline;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;

      height: 100%;

      text-align: right;
      color: ${(props) => props.theme["base-text"]};

      margin-bottom: 0;

      span {
        display: flex;
        align-items: center;

        font-family: "Baloo 2";
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 1.95rem;

        height: 100%;

        text-align: right;

        margin-left: 0.25rem;
      }
    }

    .buy__buttons {
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: center;

      padding: 0px;
      gap: 8px;

      .buy__input {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        background: ${(props) => props.theme["base-button"]};
        border-radius: 6px;

        padding: 0.5rem;
        gap: 0.25rem;

        input {
          text-align: center;

          background: transparent;

          border: none;

          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }

        button {
          display: flex;
          
          border: none;
          background-color: transparent;

          color: ${(props) => props.theme["purple"]};

          cursor: pointer;
          transition: 0.2s all ease;

          &:hover {
            color: ${(props) => props.theme["purple-dark"]};
          }
        }
      }

      .buy__cart {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        gap: 0.5rem;

        width: 38px;
        height: 38px;

        background: ${(props) => props.theme["purple-dark"]};
        border-radius: 6px;
        border: none;

        color: ${(props) => props.theme["base-card"]};

        cursor: pointer;
        transition: 0.2s all ease;

        &:hover {
          background: ${(props) => props.theme["purple"]};
        }
      }
    }
  }
`;
