import "./VideoPage.css";
import YouTube from "react-youtube";
import { useState } from "react";
import {
  MdOutlineWatchLater,
  MdPlaylistAdd,
  MdPlaylistAddCheck,
} from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";

import { useAuth, useVideos } from "../../context";
import { addToHistory } from "../../context/Video/history";
import {
  isVideoWatchlater,
  addToWatchlater,
  removeFromWatchlater,
} from "../../context/Video/watchlater";
import {
  isVideoLiked,
  likeVideo,
  unLikeVideo,
} from "../../context/Video/liked";
import { Modal } from "../../components";
export const VideoPage = () => {
  const { videoId } = useParams();
  const { videoDispatch, videoState, showModal, setShowModal, setVideo } =
    useVideos();

  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const { videos, liked, watchLater, playlists, history } = videoState;

  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  const findVideoDetails = (videos) => {
    return videos.find((video) => video._id === videoId);
  };

  const data = findVideoDetails(videos);
  const isLiked = isVideoLiked(data?._id, liked);
  const isWatchLater = isVideoWatchlater(data?._id, watchLater);

  return (
    <>
      <div className="videoplayer-container">
        <YouTube
          class="video-iframe"
          videoId={videoId}
          opts={opts}
          onReady={() => addToHistory(isLoggedIn, data, videoDispatch)}
        />
      </div>
      <div className="video-footer">
        <div className="video-icons">
          <h3 className="headline-3 video-title">{data?.title}</h3>
          <div className="icons">
            {isLiked ? (
              <AiFillLike
                color={"var(--primary-color)"}
                size={25}
                onClick={() => unLikeVideo(isLoggedIn, data, videoDispatch)}
              />
            ) : (
              <BiLike
                size={25}
                onClick={() => likeVideo(isLoggedIn, data, videoDispatch)}
              />
            )}
            {isWatchLater ? (
              <IoCheckmarkSharp
                size={25}
                color={"var(--primary-color"}
                onClick={() =>
                  removeFromWatchlater(isLoggedIn, data, videoDispatch)
                }
              />
            ) : (
              <MdOutlineWatchLater
                size={25}
                onClick={() => addToWatchlater(isLoggedIn, data, videoDispatch)}
              />
            )}
            <MdPlaylistAdd
              size={25}
              onClick={() => {
                setShowModal(true);
                setVideo(data);
              }}
            />
          </div>
        </div>
        <h4 className="headline-4">Channel Name : {data?.channelTitle}</h4>
        <p className="small-text-3">Description :</p>
        <p className="small-text-3">{data?.description}</p>
      </div>

      {showModal && <Modal setShowModal={setShowModal} showPlaylists={true} />}
    </>
  );
};
