import styled from "styled-components";

export const BannerContainer = styled.div`
  /* display: flex;
  align-items: center; */

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  min-height: 544px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-family: "Baloo 2", cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme["base-subtitle"]};
    font-stretch: 100%;
  }

  .icon-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 2.5rem;
    grid-row-gap: 1.25rem;

    margin-top: 4.125rem;

    div:nth-child(1n) span {
      background: ${(props) => props.theme["yellow-dark"]};
    }
    div:nth-child(2n) span {
      background: ${(props) => props.theme["base-text"]};
    }
    div:nth-child(3n) span {
      background: ${(props) => props.theme["yellow"]};
    }
    div:nth-child(4n) span {
      background: ${(props) => props.theme["purple"]};
    }

    div {
      display: flex;
      align-items: center;

      gap: 0.75rem;

      span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        gap: 8px;

        width: 32px;
        height: 32px;

        color: ${(props) => props.theme["background"]};
        border-radius: 1000px;
      }

      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;

        color: ${(props) => props.theme["base-text"]};
      }
    }
  }

  .col-img {
    align-items: center;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1rem;
    }

    .icon-list {
      margin-top: 2.125rem;

      div p {
        font-size: 0.75rem;
      }
    }
  }
  @media (max-width: 500px) {
    gap: 2.5rem;

    h1 {
      font-size: 1.7rem;
    }

    .icon-list {
      grid-column-gap: 0.5rem;
    }
  }
  @media (max-width: 1400px) {
    /* display: flex;
    flex-direction: column; */
  }
`;
