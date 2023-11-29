import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      mainFontColor: string;
      lightFontColor: string;
      mainColor: string;
      secondaryColor: string;
      buttonMainColor: string;
      buttonDesableColor: string;
      okFeedbackBackgroundColor: string;
      failFeedbackBackgroundColor: string;
    };
    typography: {
      mainFontFamily: string;
    };
  }
}
