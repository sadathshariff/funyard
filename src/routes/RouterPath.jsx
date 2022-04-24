import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Liked,
  Playlist,
  WatchLater,
  History,
  Login,
  Signup,
  NotFound,
  VideoPage,
} from "../pages";
import MockAPI from "../mockMan";
import { RequireAuth } from "../components";
export const RouterPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/video/:videoId" element={<VideoPage />} />
      <Route path="/mockman" element={<MockAPI />} />

      <Route
        path="/liked"
        element={
          <RequireAuth>
            <Liked />
          </RequireAuth>
        }
      />
      <Route
        path="/playlist"
        element={
          <RequireAuth>
            <Playlist />
          </RequireAuth>
        }
      />
      <Route
        path="/watchlater"
        element={
          <RequireAuth>
            <WatchLater />
          </RequireAuth>
        }
      />
      <Route
        path="/history"
        element={
          <RequireAuth>
            <History />
          </RequireAuth>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
