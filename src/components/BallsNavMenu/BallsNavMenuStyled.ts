import styled from "styled-components";

const BallsNavMenuStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 43px;
  width: 100%;
  position: fixed;
  position: absolute;
  top: 80px;
  background-color: ${({ theme }) => theme.color.secondaryColor};

  .navigation__text {
    font-size: 27px;
    margin-right: 30px;
  }

  .active {
    color: ${({ theme }) => theme.color.lightFontColor};
  }
`;

export default BallsNavMenuStyled;
