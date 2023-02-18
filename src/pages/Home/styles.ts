import styled from "styled-components";

export const HomeContainer = styled.div`
  .title {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  .coffeeList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;
  }
`;

export const CoffeeListContainer = styled.div`
  position: relative;

  background-color: ${(props) => props.theme["base-card"]};

  padding: calc(1.25rem + 72px) 1.25rem 1.5rem;
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

    margin-top: 0.75rem;
    margin-bottom: 1rem;
    gap: 0.25rem;

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
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span{
      display: inline-block;
    }
  }
`;
