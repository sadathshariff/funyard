import "./Playlist.css";

import { Link } from "react-router-dom";
import { Modal, Button } from "../../components";
import { useVideos } from "../../context";
export const Playlist = () => {
  const { videoState, showModal, setShowModal } = useVideos();
  const { playlists } = videoState;
  return (
    <>
      <div className="history-container">
        <div className="clear-all-div">
          <h3 className="headline-3">Playlists</h3>
          <Button
            name={"Create New"}
            btnvariant={"btn-danger"}
            onClick={() => setShowModal(true)}
          />
        </div>
        {playlists?.length === 0 ? (
          <div className="empty-container">
            <h3 className="headline-3 text-center">
              You Haven't created any Playlist yet!
            </h3>
            <p className="small-text-3">Let's bring a Smile on your Face</p>
            <Link to="/explore">
              <Button name={"Let's Laugh"} btnvariant={"btn-primary"} />
            </Link>
          </div>
        ) : (
          <div>
            <div className="history-videos">
              {playlists?.map(({ _id, title }) => (
                <Link to={`/playlists/${_id}`}>
                  <div className="playlist-card" key={_id}>
                    <div className="card-info">
                      <h3 className="headline-3 text-center">{title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        {showModal && (
          <Modal setShowModal={setShowModal} showPlaylists={false} />
        )}
      </div>
    </>
  );
};
