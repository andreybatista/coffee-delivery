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

    margin-bottom: 3.375rem;
  }

  .coffeeList {
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;
  }
`;

