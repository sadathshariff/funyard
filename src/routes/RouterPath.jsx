import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Liked,
  WatchLater,
  History,
  Login,
  Signup,
  NotFound,
} from "../pages";
import MockAPI from "../mockMan";
export const RouterPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/history" element={<History />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mockman" element={<MockAPI />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
