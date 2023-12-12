import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const ToastStyled = styled(ToastContainer)`
  .toast {
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
    color: #000;
    width: 85%;
    margin-top: 5px;

    &--success {
      background-color: ${({ theme }) => theme.color.okFeedbackBackgroundColor};

      .Toastify__progress-bar {
        background-color: #addec1;
      }
    }

    &--fail {
      background-color: ${({ theme }) =>
        theme.color.failFeedbackBackgroundColor};
    }
  }
`;

export default ToastStyled;
