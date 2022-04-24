import "./Explore.css";
import { VideoCard } from "../../components";
import { useVideos } from "../../context";
import { Filter } from "./Filter/Filter";
export const Explore = () => {
  const { videos } = useVideos();

  return (
    <>
      <Filter />
      <div className="video-container">
        {videos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </>
  );
};
