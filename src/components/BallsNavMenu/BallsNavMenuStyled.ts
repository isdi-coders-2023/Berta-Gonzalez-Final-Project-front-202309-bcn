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
    color: ${({ theme }) => theme.color.darkFontColor};
    display: flex;
    flex-direction: row;
    padding-right: 21px;
    gap: 20px;

    &__text {
      font-size: 1.688rem;
    }
  }

  .active {
    color: ${({ theme }) => theme.color.lightFontColor};
  }
`;

export default BallsNavMenuStyled;
