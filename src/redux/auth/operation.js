import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  notifyOnError,
  notifyOnLogIn,
  notifyOnLogOut,
} from "../../helpers/hotToasters";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      toast.dismiss();
      notifyOnLogIn(response.data.user.name);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      notifyOnError(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      toast.dismiss();
      notifyOnLogIn(response.data.user.name);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      notifyOnError(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout");
    setAuthHeader("");
    notifyOnLogOut();
    return response.data;
  } catch (e) {
    setAuthHeader("");
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token);

    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);