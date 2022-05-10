import { useState } from "react";
import { useAuth, useVideos } from "../../context";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "../../components";
import {
  deletePlaylist,
  removeVideoFromPlaylist,
} from "../../context/Video/playlist";

export const SinglePlaylistPage = () => {
  const { playlistId } = useParams();

  const { authState } = useAuth();
  const { isLoggedIn } = authState;

  const { videoDispatch, videoState } = useVideos();
  const [singlePlaylist, setSinglePlaylist] = useState({});

  const navigate = useNavigate();

  const getVideoFromPlaylist = async () => {
    try {
      const res = await axios.get(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: isLoggedIn,
        },
      });
      if (res.status === 200) {
        setSinglePlaylist(res.data.playlist);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideoFromPlaylist();
  }, [singlePlaylist]);

  return (
    <>
      <div className="history-container">
        {singlePlaylist?.videos?.length === 0 ? (
          <div className="empty-container">
            <h3 className="headline-3 text-center">
              you don't any videos in this Playlist - {singlePlaylist?.title}
            </h3>
            <p className="small-text-3">Let's bring a Smile on your Face</p>
            <Link to="/explore">
              <Button name={"Let's Laugh"} btnvariant={"btn-primary"} />
            </Link>
          </div>
        ) : (
          <div>
            <div className="clear-all-div">
              <h3 className="headline-3">
                {singlePlaylist?.title} - {singlePlaylist?.videos?.length}
              </h3>
              <Button
                name={"Clear All"}
                btnvariant={"btn-danger"}
                onClick={() =>
                  deletePlaylist(
                    isLoggedIn,
                    playlistId,
                    videoDispatch,
                    navigate
                  )
                }
              />
            </div>
            <div className="history-videos">
              {singlePlaylist?.videos?.map((video) => (
                <div className="history-card" key={video._id}>
                  <Link to={`/video/${video._id}`}>
                    <img src={video.thumbnails.medium.url} alt={video.title} />
                  </Link>
                  <div className="card-info">
                    <h4 className="headline-4">{video.title}</h4>
                    <FiTrash
                      size={20}
                      className="trash-icon"
                      onClick={() =>
                        removeVideoFromPlaylist(
                          isLoggedIn,
                          playlistId,
                          video._id,
                          videoDispatch
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
