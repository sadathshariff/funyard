import "./Explore.css";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { VideoCard } from "../../components";
import { useVideos } from "../../context";
import { Filter } from "./Filter/Filter";
export const Explore = () => {
  const { videos } = useVideos();

  return (
    <>
      <Filter />
      <motion.div layout className="video-container">
        <AnimatePresence>
          {videos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
