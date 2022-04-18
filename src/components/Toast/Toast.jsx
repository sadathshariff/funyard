import { toast } from "react-toastify";
export const ToastMsg = (toastText, toastTheme) => {
  const notify = () => {
    toast[toastTheme](toastText, {
      position: "top-right",
      autoClose: 1000,
      theme: "light",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  notify();
};
