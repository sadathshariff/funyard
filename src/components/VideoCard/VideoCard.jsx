import "./VideoCard.css";
import { motion } from "framer-motion/dist/framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMoreVert, MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useAuth, useVideos } from "../../context";
import {
  isVideoLiked,
  likeVideo,
  unLikeVideo,
} from "../../context/Video/liked";
import {
  addToWatchlater,
  isVideoWatchlater,
} from "../../context/Video/watchlater";
import { Modal } from "../../components";
import { ToastMsg } from "../Toast/Toast";
export const VideoCard = ({ video }) => {
  const { _id, title, channelTitle, thumbnails } = video;
  const [showMenu, setShowMenu] = useState(false);

  const { authState } = useAuth();
  const {
    videoDispatch,
    videoState,
    showModal,
    setShowModal,

    setVideo,
  } = useVideos();
  const { isLoggedIn } = authState;
  const { liked, watchLater } = videoState;
  const isLiked = isVideoLiked(_id, liked);
  const isWatchlater = isVideoWatchlater(_id, watchLater);

  return (
    <>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="videoCard"
      >
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
                    {isLiked ? (
                      <BiDislike
                        color={"black"}
                        size={20}
                        onClick={() =>
                          unLikeVideo(isLoggedIn, video, videoDispatch)
                        }
                      />
                    ) : (
                      <BiLike
                        size={20}
                        onClick={() =>
                          likeVideo(isLoggedIn, video, videoDispatch)
                        }
                      />
                    )}
                  </li>
                  <li>
                    {isWatchlater ? (
                      <IoCheckmarkSharp
                        size={20}
                        color={"black"}
                        onClick={() =>
                          removeFromWatchlater(isLoggedIn, video, videoDispatch)
                        }
                      />
                    ) : (
                      <MdOutlineWatchLater
                        size={20}
                        onClick={() =>
                          addToWatchlater(isLoggedIn, video, videoDispatch)
                        }
                      />
                    )}
                  </li>
                  <li>
                    <MdPlaylistAdd
                      size={20}
                      onClick={() => {
                        if (isLoggedIn) {
                          setShowModal(true);
                          setShowMenu(false);
                          setVideo(video);
                        } else {
                          ToastMsg("Please Login", "warning");
                        }
                      }}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
          <p className="small-text-3 ">{channelTitle}</p>
        </div>
      </motion.div>
      {showModal && <Modal setShowModal={setShowModal} showPlaylists={true} />}
    </>
  );
};
