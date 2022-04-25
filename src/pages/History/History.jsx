import "./History.css";
import { useVideos, useAuth } from "../../context";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { deleteAllVideos, deteleVideo } from "../../context/Video/history";
export const History = () => {
  const { videoState, videoDispatch } = useVideos();
  const { authState } = useAuth();
  const { history } = videoState;
  const { isLoggedIn } = authState;

  return (
    <>
      <div className="history-container">
        {history.length === 0 ? (
          <div className="empty-container">
            <h3 className="headline-3 text-center">
              Looks Like you haven't watched anything yet.
            </h3>
            <p className="small-text-3">Let's bring a Smile on your Face</p>
            <Link to="/explore">
              <Button name={"Let's Laugh"} btnvariant={"btn-primary"} />
            </Link>
          </div>
        ) : (
          <div>
            <div className="clear-all-div">
              <h3 className="headline-3">History - {history.length}</h3>
              <Button
                name={"Clear All"}
                btnvariant={"btn-danger"}
                onClick={() => deleteAllVideos(isLoggedIn, videoDispatch)}
              />
            </div>
            <div className="history-videos">
              {history.map((video) => (
                <div className="history-card" key={video._id}>
                  <img src={video.thumbnails.medium.url} alt={video.title} />
                  <div className="card-info">
                    <h4 className="headline-4">{video.title}</h4>
                    <FiTrash
                      size={20}
                      className="trash-icon"
                      onClick={() =>
                        deteleVideo(isLoggedIn, video, videoDispatch)
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
