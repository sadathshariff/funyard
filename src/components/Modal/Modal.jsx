import "./Modal.css";
import { useState, useEffect } from "react";
import { Button } from "../../components";
import { useAuth, useVideos } from "../../context";
import {
  addNewPlaylist,
  addVideoToPlaylist,
  getAllPlaylist,
  isVideoPresentInPlaylist,
  removeVideoFromPlaylist,
} from "../../context/Video/playlist";
import { IoMdCloseCircle } from "react-icons/io";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import { ToastMsg } from "../Toast/Toast";
export const Modal = ({ showPlaylists }) => {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const { videoState, videoDispatch, setShowModal, video } = useVideos();
  const { playlists } = videoState;
  const [playlistTitle, setPlaylistTitle] = useState("");
  const addNewPlaylistHandler = () => {
    if (playlistTitle !== "") {
      addNewPlaylist(
        isLoggedIn,
        {
          title: playlistTitle,
          description: "New Playlist",
        },
        videoDispatch
      );
    } else {
      ToastMsg("Enter Playlist Title", "warning");
    }
    setPlaylistTitle("");
  };
  useEffect(() => {
    getAllPlaylist(isLoggedIn, videoDispatch);
  }, [playlists]);

  return (
    <div className="modal-container">
      <div className="modal-playlists">
        <>
          {showPlaylists && (
            <>
              {playlists?.map(({ _id, title, videos }) => (
                <li key={_id} className="playlist-list">
                  {isVideoPresentInPlaylist(video?._id, videos) ? (
                    <MdPlaylistAddCheck
                      size={30}
                      color={"var(--primary-color)"}
                      onClick={() =>
                        removeVideoFromPlaylist(
                          isLoggedIn,
                          _id,
                          video._id,
                          videoDispatch
                        )
                      }
                    />
                  ) : (
                    <MdPlaylistAdd
                      size={25}
                      onClick={() => {
                        addVideoToPlaylist(
                          isLoggedIn,
                          video,
                          _id,
                          videoDispatch
                        );
                      }}
                    />
                  )}
                  <p className="small-text-2"> {title}</p>
                </li>
              ))}
            </>
          )}
        </>
        <div className="modal-div">
          <div className="input">
            <input
              type="text"
              value={playlistTitle}
              className="input-text"
              onChange={(e) => setPlaylistTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-btns">
          <Button
            name={"Create"}
            btnvariant={"btn-success"}
            onClick={() => addNewPlaylistHandler()}
          />
          <IoMdCloseCircle size={30} onClick={() => setShowModal(false)} />
        </div>
      </div>
    </div>
  );
};
