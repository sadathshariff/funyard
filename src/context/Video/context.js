import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { videoReducer } from "./reducer";
import { FilterByCategory, Compose } from "./utils";

const VideoContext = createContext(null);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, {
    videos: [],
    liked: [],
    watchLater: [],
    history: [],
    playlists: [],
    category: "ALL",
  });
  const getFilteredVideos = Compose(
    videoState,
    FilterByCategory
  )(videoState.videos);

  const getAllVideos = async () => {
    try {
      const res = await axios.get("/api/videos");
      if (res.status === 200) {
        videoDispatch({ type: "SET_VIDEOS", payload: res.data.videos });
      }
    } catch (error) {
      console.error("Videos", error);
    }
  };

  useEffect(() => {
    getAllVideos();
  }, []);
  return (
    <VideoContext.Provider
      value={{ videoState, videoDispatch, videos: getFilteredVideos }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideos = () => useContext(VideoContext);

export { useVideos, VideoProvider };
