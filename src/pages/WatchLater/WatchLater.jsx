import { useVideos, useAuth } from "../../context";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { removeFromWatchlater } from "../../context/Video/watchlater";
export const WatchLater = () => {
  const { videoState, videoDispatch } = useVideos();
  const { authState } = useAuth();
  const { watchLater } = videoState;
  const { isLoggedIn } = authState;
  return (
    <>
      <div className="history-container">
        {watchLater.length === 0 ? (
          <div className="empty-container">
            <h3 className="headline-3 text-center">
              you haven't added any videos yet.
            </h3>
            <p className="small-text-3">Let's bring a Smile on your Face</p>
            <Link to="/explore">
              <Button name={"Let's Laugh"} btnvariant={"btn-primary"} />
            </Link>
          </div>
        ) : (
          <div>
            <div className="clear-all-div">
              <h3 className="headline-3">WatchLater - {watchLater.length}</h3>
            </div>
            <div className="history-videos">
              {watchLater.map((video) => (
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
                        removeFromWatchlater(isLoggedIn, video, videoDispatch)
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
