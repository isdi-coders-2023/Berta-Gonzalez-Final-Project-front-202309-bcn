import styled from "styled-components";

const BallsButtonStyled = styled.button`
  width: 139px;
  height: 48px;
  background-color: ${({ theme }) => theme.color.buttonMainColor};
  color: ${({ theme }) => theme.color.darkFontColor};
  font-size: 1.438rem;
  border-radius: 5px;
`;

export default BallsButtonStyled;
