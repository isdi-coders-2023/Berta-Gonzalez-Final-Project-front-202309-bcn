import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const ToastStyled = styled(ToastContainer)`
  .toast {
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
    color: #000;

    &--success {
      background-color: ${({ theme }) => theme.color.okFeedbackBackgroundColor};
    }

    &--fail {
      background-color: ${({ theme }) =>
        theme.color.failFeedbackBackgroundColor};
    }
  }
`;

export default ToastStyled;
