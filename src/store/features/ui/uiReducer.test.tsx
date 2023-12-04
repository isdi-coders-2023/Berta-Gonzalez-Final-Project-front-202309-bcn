import {
  hideErrorActionCreator,
  showErrorActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading minireducer", () => {
  describe("When it receives a currentUiState with a property isLoading in false", () => {
    test("Then it should change it state to true", () => {
      const initialUiState = { isLoading: false };
      const finalUiState = { isLoading: true };
      const isLoadingNewState = uiReducer(
        initialUiState,
        showLoadingActionCreator(),
      );

      expect(isLoadingNewState).toStrictEqual(finalUiState);
    });
  });
});

describe("Given a showError minireducer", () => {
  describe("When it receives a currentUiState with the property isError with false value", () => {
    test("Then it should change it value to true", () => {
      const initialUiState = { isError: false };
      const finalUiState = { isError: true };
      const isErrorNewState = uiReducer(
        initialUiState,
        showErrorActionCreator(),
      );

      expect(isErrorNewState).toStrictEqual(finalUiState);
    });
  });
});

describe("Given a hideError minireducer", () => {
  describe("When it receives a currentUiState with property isError with value true", () => {
    test("Then it should change it value to false", () => {
      const initialUiState = { isError: true };
      const finalUiState = { isError: false };
      const isErrorNewState = uiReducer(
        initialUiState,
        hideErrorActionCreator(),
      );

      expect(isErrorNewState).toStrictEqual(finalUiState);
    });
  });
});
