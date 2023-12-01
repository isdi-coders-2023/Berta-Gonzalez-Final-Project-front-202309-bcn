import styled from "styled-components";

const BallsNavMenuStyled = styled.nav`
  display: flex;
  position: fixed;
  justify-content: flex-end;
  align-items: flex-start;
  height: 43px;
  width: 100%;
  top: 80px;
  background-color: ${({ theme }) => theme.color.secondaryColor};

  .navigation {
    display: flex;
    flex-direction: row;

    &__text {
      font-size: 1.688rem;
      margin-right: 30px;
    }
  }

  .active {
    color: ${({ theme }) => theme.color.lightFontColor};
  }
`;

export default BallsNavMenuStyled;
