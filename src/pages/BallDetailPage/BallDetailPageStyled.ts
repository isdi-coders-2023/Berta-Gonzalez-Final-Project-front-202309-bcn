import styled from "styled-components";

const BallDetailPageStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  .detail {
    &__image {
      object-fit: cover;
    }

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__title {
      margin-top: 144px;
      text-align: center;
      margin-bottom: 25px;
      font-size: 1.438rem;
      font-weight: 400;
    }

    &__ball-name {
      margin-top: 20px;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 1.688rem;
      margin-bottom: 39px;
      text-align: center;
    }

    &__list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 1.438rem;
      margin-bottom: 16px;

      &--text {
        overflow-wrap: anywhere;
        text-align: end;
        width: 121px;
      }

      &--description {
        display: flex;
        flex-direction: column;
        font-size: 1.438rem;
        gap: 13px;

        &-text {
          overflow-wrap: anywhere;
          text-align: center;
          width: 258px;
        }
      }
    }

    &__checkbox {
      margin-left: 200px;
      margin-top: 7px;
      width: 20px;
      height: 20px;
      accent-color: ${({ theme }) => theme.color.buttonHaveOK};
    }
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 21px;
  }
`;

export default BallDetailPageStyled;
