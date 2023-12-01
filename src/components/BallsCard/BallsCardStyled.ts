import styled from "styled-components";

const BallsCardStyled = styled.section`
  width: 299px;
  padding-bottom: 21px;
  margin-bottom: 48px;
  padding-top: 21px;
  border-radius: 5px;
  box-shadow: #0000003d 0px 3px 8px;

  .card {
    &__image {
      border-radius: 5px;
    }

    &__ball-name {
      font-size: 27px;
      font-weight: 400;
      text-transform: uppercase;
      margin-top: 12px;
    }

    &__list-container {
      margin-top: 26px;
    }

    &__item {
      font-size: 23px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 16px;
    }
  }
`;

export default BallsCardStyled;
