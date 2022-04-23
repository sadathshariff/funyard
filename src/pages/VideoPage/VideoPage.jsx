import "./VideoPage.css";
import YouTube from "react-youtube";

import { useParams } from "react-router-dom";
import { useVideos } from "../../context";

import { MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import { BiLike } from "react-icons/bi";
export const VideoPage = () => {
  const { videoId } = useParams();
  const { videos } = useVideos();

  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  const findVideoDetails = (videos) => {
    return videos.find((video) => video._id === videoId);
  };

  const data = findVideoDetails(videos);
  return (
    <>
      <div className="videoplayer-container">
        <YouTube class="video-iframe" videoId={videoId} opts={opts} />
      </div>
      <div className="video-footer">
        <div className="video-icons">
          <h3 className="headline-3 video-title">{data?.title}</h3>
          <div className="icons">
            <BiLike size={25} />
            <MdOutlineWatchLater size={25} />
            <MdPlaylistAdd size={25} />
          </div>
        </div>
        <h4 className="headline-4">Channel Name : {data?.channelTitle}</h4>
        <p className="small-text-3">Description :</p>
        <p className="small-text-3">{data?.description}</p>
      </div>
    </>
  );
};
