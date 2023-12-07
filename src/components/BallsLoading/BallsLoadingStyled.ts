import styled from "styled-components";

const BallsLoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.lightFontColor};

  .loading {
    &__text {
      margin-top: 174px;
      font-size: 2.813rem;
      font-weight: 400;
      text-transform: uppercase;
    }

    &__image {
      object-fit: cover;
    }
  }
`;

export default BallsLoadingStyled;
