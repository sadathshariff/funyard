import "./VideoCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMoreVert, MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import { BiLike } from "react-icons/bi";
export const VideoCard = ({ video }) => {
  const { _id, title, channelTitle, thumbnails } = video;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="videoCard">
        <Link to={`/video/${_id}`}>
          <img src={thumbnails.medium.url} alt={title} className="resp-img " />
        </Link>
        <div className="card-info">
          <div className="icon-div">
            <h4 className="headline-4">{title}</h4>
            <MdMoreVert
              size={22}
              onClick={() => setShowMenu((prev) => !prev)}
            />
            {showMenu && (
              <div className="menu-container list">
                <ul>
                  <li>
                    <BiLike size={20} />
                  </li>
                  <li>
                    <MdOutlineWatchLater size={20} />
                  </li>
                  <li>
                    <MdPlaylistAdd size={20} />
                  </li>
                </ul>
              </div>
            )}
          </div>

          <p className="small-text-3 ">{channelTitle}</p>
        </div>
      </div>
    </>
  );
};
