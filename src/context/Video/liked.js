import axios from "axios";
import { ToastMsg } from "../../components";

export const getAllLikedVideos = async (isLoggedIn, videoDispatch) => {
  try {
    const res = await axios.get("/api/user/likes", {
      headers: {
        authorization: isLoggedIn,
      },
    });
    if (res.status === 200) {
      videoDispatch({ type: "GET_ALL_LIKED_VIDEOS", payload: res.data.likes });
    }
  } catch (error) {
    ToastMsg("Some Error Occured", "error");
  }
};

export const likeVideo = async (isLoggedIn, video, videoDispatch) => {
  try {
    const res = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: {
          authorization: isLoggedIn,
        },
      }
    );
    if (res.status === 201) {
      videoDispatch({ type: "LIKE_VIDEO", payload: res.data.likes });
      ToastMsg("Video added to your liked videos", "success");
    }
  } catch (error) {
    ToastMsg("Couldn't like Video,Some Error Occured", "error");
  }
};

export const unLikeVideo = async (isLoggedIn, video, videoDispatch) => {
  try {
    const res = await axios.delete(`/api/user/likes/${video._id}`, {
      headers: {
        authorization: isLoggedIn,
      },
    });

    if (res.status === 200) {
      videoDispatch({ type: "UNLIKE_VIDEO", payload: res.data.likes });
      ToastMsg("Video removed from your liked videos", "success");
    }
  } catch (error) {
    ToastMsg("Couldn't remove Video,Some Error Occured", "error");
  }
};

export const isVideoLiked = (id, data) => data.some((v) => v._id === id);
