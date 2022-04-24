export const videoReducer = (state, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, videos: action.payload };
    case "FILTER_BY_CATEGORY":
      return { ...state, category: action.payload };

    default:
      return { ...state };
  }
};
