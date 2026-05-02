import { toast } from "react-toastify";


export const showSuccess = (message) => {
  toast.success(message, {
    duration: 2,
    position: "top-right",
  });
};

export const showError = (message) => {
  toast.error(message, {
    duration: 2,
    position: "top-right",
  });
};

export const showLoading = (message) => {
  return toast.loading(message, {
    position: "top-right",
  });
};

export const dismissToast = (toastId) => {
  toast.dismiss(toastId);
};
