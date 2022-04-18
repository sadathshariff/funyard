import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useAuth } from "../../context";
import { logoutHandler } from "../../context/Auth/util";
import { Button } from "../index";

export const Header = ({ toggleSidenav }) => {
  const { authState, authDispatch } = useAuth();
  const { isLoggedIn } = authState;
  const navigate = useNavigate();

  return (
    <header>
      <nav className="navbar-container">
        <div className="menu-btn">
          <MdMenu size={30} onClick={toggleSidenav} />
        </div>
        <h1 className="headline-2 logo">
          <Link to="/">FunYard</Link>
        </h1>
        <div className="nav-item-links nav-button">
          {isLoggedIn ? (
            <Button
              name={"Logout"}
              btnvariant={"btn-success"}
              onClick={() => logoutHandler(authDispatch, navigate)}
            />
          ) : (
            <Button
              name={"Login"}
              btnvariant={"btn-success"}
              onClick={() => navigate("./login")}
            />
          )}
        </div>
      </nav>
    </header>
  );
};
