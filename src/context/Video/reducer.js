export const videoReducer = (state, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, videos: action.payload };
    case "FILTER_BY_CATEGORY":
      return { ...state, category: action.payload };
    case "GET_HISTORY":
    case "ADD_TO_HISTORY":
    case "DELETE_FROM_HISTORY":
    case "DELETE_ALL_FROM_HISTORY":
      return { ...state, history: action.payload };
    case "GET_ALL_LIKED_VIDEOS":
    case "LIKE_VIDEO":
    case "UNLIKE_VIDEO":
      return { ...state, liked: action.payload };
    default:
      return { ...state };
  }
};
