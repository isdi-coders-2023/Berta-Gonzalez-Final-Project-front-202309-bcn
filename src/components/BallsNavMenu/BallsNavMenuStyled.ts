import styled from "styled-components";

const BallsNavMenuStyled = styled.nav`
  .navigation {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 43px;
    width: 100%;

    top: 80px;
    background-color: ${({ theme }) => theme.color.secondaryColor};
    &__text {
      font-size: 27px;
      margin-right: 30px;
    }
  }

  .active {
    color: ${({ theme }) => theme.color.lightFontColor};
  }
`;

export default BallsNavMenuStyled;
