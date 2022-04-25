import axios from "axios";
import { ToastMsg } from "../../components";
export const addToHistory = async (isLoggedIn, video, videoDispatch) => {
  if (isLoggedIn !== null) {
    try {
      const res = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: {
            authorization: isLoggedIn,
          },
        }
      );
      if (res.status === 201) {
        videoDispatch({ type: "ADD_TO_HISTORY", payload: res.data.history });
      }
    } catch (error) {
      console.log(error);
      ToastMsg("Some Error Occured", "error");
    }
  } else {
    ToastMsg("Please Login", "info");
  }
};

export const getAllHistory = async (isLoggedIn, videoDispatch) => {
  try {
    const res = await axios.get("/api/user/history", {
      headers: {
        authorization: isLoggedIn,
      },
    });

    if (res.status === 200) {
      videoDispatch({ type: "GET_HISTORY", payload: res.data.history });
    }
  } catch (error) {
    ToastMsg("Something went wrong, Please Try again later", "error");
  }
};

export const deteleVideo = async (isLoggedIn, video, videoDispatch) => {
  try {
    const res = await axios.delete(`/api/user/history/${video._id}`, {
      headers: {
        authorization: isLoggedIn,
      },
    });
    console.log(res);
    if (res.status === 200) {
      videoDispatch({ type: "DELETE_FROM_HISTORY", payload: res.data.history });
      ToastMsg("Video Deleted from History", "success");
    }
  } catch (error) {
    console.error(error);
    ToastMsg("Couldn't Delete Video, Please Try again later", "error");
  }
};

export const deleteAllVideos = async (isLoggedIn, videoDispatch) => {
  try {
    const res = await axios.delete("/api/user/history/all", {
      headers: {
        authorization: isLoggedIn,
      },
    });

    if (res.status === 200) {
      videoDispatch({
        type: "DELETE_ALL_FROM_HISTORY",
        payload: res.data.history,
      });
      ToastMsg("Cleared All videos", "success");
    }
  } catch (error) {
    console.error(error);
    ToastMsg("Couldn't Delete Videos, try after sometime", "error");
  }
};
