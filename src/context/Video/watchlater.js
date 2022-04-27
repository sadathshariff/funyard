import axios from "axios";
import { ToastMsg } from "../../components";

export const getAllWatchLater = async (isLoggedIn, videoDispatch) => {
  try {
    const res = await axios.get("/api/user/watchlater", {
      headers: {
        authorization: isLoggedIn,
      },
    });

    if (res.status === 200) {
      videoDispatch({
        type: "GET_ALL_WATCHLATER",
        payload: res.data.watchlater,
      });
    }
  } catch (error) {
    console.log(error);
    ToastMsg("Some Error Occured,Please try again later", "error");
  }
};

export const addToWatchlater = async (isLoggedIn, video, videoDispatch) => {
  try {
    const res = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: {
          authorization: isLoggedIn,
        },
      }
    );

    if (res.status === 201) {
      videoDispatch({
        type: "ADD_TO_WATCHLATER",
        payload: res.data.watchlater,
      });
      ToastMsg("Video added to Watchlater", "success");
    }
  } catch (error) {
    console.log(error);
    ToastMsg("Couln't add to Watchlater,try again later", "error");
  }
};

export const removeFromWatchlater = async (
  isLoggedIn,
  video,
  videoDispatch
) => {
  try {
    const res = await axios.delete(`/api/user/watchlater/${video._id}`, {
      headers: {
        authorization: isLoggedIn,
      },
    });

    if (res.status === 200) {
      videoDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        payload: res.data.watchlater,
      });
      ToastMsg("Video removed from Watchlater", "success");
    }
  } catch (error) {
    console.log(error);
    ToastMsg("Couln't remove from Watchlater,try again later", "error");
  }
};

export const isVideoWatchlater = (id, data) => data.some((v) => v._id === id);
