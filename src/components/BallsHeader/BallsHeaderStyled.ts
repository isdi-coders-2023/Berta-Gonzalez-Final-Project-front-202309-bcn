import styled from "styled-components";

const BallsHeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.color.mainColor};
  z-index: 1;

  .logo {
    margin-top: 13px;
    width: 240px;
    height: 51px;
    opacity: 100%;
    object-fit: cover;
  }
`;

export default BallsHeaderStyled;
