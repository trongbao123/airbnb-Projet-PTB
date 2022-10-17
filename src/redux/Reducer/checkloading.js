import { DISPLAY_LOADING, HIDE_LOADING } from "../Types/LoadingTypes";

const stateDefault = {
  isLoading: false,
};

export const loadingRducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DISPLAY_LOADING: {
      state.isLoading = true;
      return { ...state };
    }
    case HIDE_LOADING: {
      state.isLoading = false;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
