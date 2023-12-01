import styled from "styled-components";

const BallsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 850px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
`;

export default BallsListStyled;
