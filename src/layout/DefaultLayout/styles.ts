import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: 100vh;
  padding: 0 10rem;

  min-width: 100vw;

  background: ${(props) => props.theme['background']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
