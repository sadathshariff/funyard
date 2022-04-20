import "./Sidenav.css";
import { NavLink } from "react-router-dom";
import {
  MdOutlineExplore,
  MdOutlineWatchLater,
  MdPlaylistAdd,
  MdHistory,
} from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
export const Sidenav = ({ showSidenav, toggleSidenav }) => {
  const getActiveStyle = ({ isActive }) => {
    isActive;
  };
  return (
    <div
      className={
        showSidenav ? `${"sidenav-container-display"}` : "sidenav-container"
      }
    >
      <ul className="list">
        <li>
          <NavLink to="/" style={getActiveStyle}>
            <div className="flex side-item-content">
              <AiOutlineHome size={25} />
              <p className="small-text-2">Home</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" style={getActiveStyle}>
            <div className="flex side-item-content">
              <MdOutlineExplore size={25} />
              <p className="small-text-2">Explore</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/liked" style={getActiveStyle}>
            <div className="flex side-item-content">
              <BiLike size={25} />
              <p className="small-text-2">Liked</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/watchlater" style={getActiveStyle}>
            <div className="flex side-item-content">
              <MdOutlineWatchLater size={25} />
              <p className="small-text-2">Watch later</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/playlist" style={getActiveStyle}>
            <div className="flex side-item-content">
              <MdPlaylistAdd size={25} />
              <p className="small-text-2">PlayList</p>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/history" style={getActiveStyle}>
            <div className="flex side-item-content">
              <MdHistory size={25} />
              <p className="small-text-2">History</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
