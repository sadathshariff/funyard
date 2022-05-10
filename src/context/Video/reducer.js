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
    case "ADD_TO_WATCHLATER":
    case "GET_ALL_WATCHLATER":
    case "REMOVE_FROM_WATCHLATER":
      return { ...state, watchLater: action.payload };
    case "GET_ALL_PLAYLIST":
    case "DELETE_PLAYLIST":
    case "ADD_NEW_PLAYLIST":
      return { ...state, playlists: action.payload };
    case "ADD_VIDEO_TO_PLAYLIST":
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists?.map((item) => {
          return item._id === action.payload._id ? action.payload : item;
        }),
      };
    default:
      return { ...state };
  }
};
