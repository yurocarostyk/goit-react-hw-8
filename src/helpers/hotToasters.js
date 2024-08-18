import toast from "react-hot-toast";

export const notifyOnContactRemove = () =>
  toast.success("Contact removed", {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "lightpink",
    },
    iconTheme: {
      primary: "lightpink",
      secondary: "#fff",
    },
  });

export const notifyOnContactAdd = () => toast.success("Contact created!");

export const notifyOnContactEdit = () => toast.success("Contact edited!");

export const notifyOnLogIn = (username) =>
  toast(`Hello, ${username}`, {
    icon: "👋🏻",
    style: {
      borderRadius: "10px",
      background: "lightpink",
      color: "#fff",
    },
  });

export const notifyOnLogOut = () =>
  toast("GoodBye!", {
    icon: "✌🏻",
    style: {
      borderRadius: "10px",
      background: "lightpink",
      color: "#fff",
    },
  });

export const notifyOnError = (message) =>
  toast.error(`${message}. Please try again.`, {
    duration: 8000,
  });