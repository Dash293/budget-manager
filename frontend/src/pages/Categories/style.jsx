import styled from "styled-components";

export default styled.main`
  background-color: var(--color-bg-primary);
  height: 80vh;
  overflow: auto;

  .title {
    color: var(--color-font-primary);
  }

  @media screen and (min-width: 700px) {
    height: 81vh;
  }
`;
