import { useAuth } from "../../context";
import { Navigate, useLocation } from "react-router-dom";
export const RequireAuth = ({ children }) => {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
