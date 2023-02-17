import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;

  min-width: 100%;

  background: ${(props) => props.theme["background"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  .container {
    padding: 0 10rem;
  }

  img {
    width: auto;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1400px) {
    .container {
      padding: 0 5rem;
    }
  }
  @media (max-width: 991px) {
    .container {
      padding: 0 2.5rem;
    }
  }
  @media (max-width: 768px) {
    .container {
      padding: 0 1.5rem;
    }
  }
  @media (max-width: 500px) {
    .container {
      padding: 0 .5rem;
    }
  }
`;
