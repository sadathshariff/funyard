export const authReducer = (state, { type, payload: { user, token } }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: user,
        isLoggedIn: token,
      };

    case "SIGNUP":
      return {
        ...state,
        user: user,
        isLoggedIn: token,
      };
    case "LOGOUT":
      return { ...state, isLoggedIn: null, user: null };

    default:
      return state;
  }
};
