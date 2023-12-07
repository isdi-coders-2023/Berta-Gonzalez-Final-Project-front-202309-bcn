import styled from "styled-components";

const BallsFormStyled = styled.form`
  padding: 21px;
  padding-top: 21px;
  box-shadow: #0000003d 0px 3px 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .form {
    &__label {
      font-size: 1.438rem;

      &--checkbox {
        display: flex;
        flex-direction: row;
        gap: 15px;
      }

      &--check {
        margin-top: 7px;
        width: 20px;
        height: 20px;
        accent-color: ${({ theme }) => theme.color.buttonHaveOK};
      }
    }

    &__input {
      background-color: ${({ theme }) => theme.color.formBackground};
      font-size: 1.25rem;
      border-radius: 5px;
      width: 100%;
      margin-top: 8px;
      margin-bottom: 17px;
      padding: 10px 15px;

      &--textarea {
        padding-bottom: 15px;
      }
    }

    &__button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
      width: 100%;

      &:disabled {
        background-color: ${({ theme }) => theme.color.buttonDesableColor};
      }
    }
  }
`;

export default BallsFormStyled;
