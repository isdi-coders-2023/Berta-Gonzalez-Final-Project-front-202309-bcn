import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const ToastStyled = styled(ToastContainer)`
  .toast {
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
    width: 85%;
    margin-top: 5px;

    &--success {
      color: #000;
      background-color: ${({ theme }) => theme.color.okFeedbackBackgroundColor};

      .Toastify__progress-bar {
        background-color: #addec1;
      }

      .Toastify__close-button {
        color: #000;
      }
    }

    &--fail {
      color: #fff;
      background-color: ${({ theme }) =>
        theme.color.failFeedbackBackgroundColor};

      .Toastify__progress-bar {
        background-color: #e88080;
      }

      .Toastify__close-button {
        color: #fff;
      }
    }
  }
`;

export default ToastStyled;
