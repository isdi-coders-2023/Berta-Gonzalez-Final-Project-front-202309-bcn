import styled from "styled-components";

const BallNotFoundPageStyled = styled.main`
  background-color: ${({ theme }) => theme.color.lightFontColor};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .not-found {
    text-align: center;

    &__title {
      padding-top: 189px;
      text-transform: uppercase;
      font-weight: 400;
    }

    &__dino {
      align-items: center;
    }
  }
`;

export default BallNotFoundPageStyled;
