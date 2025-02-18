import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Configure axios with base URL
axios.defaults.baseURL = "http://localhost:3001";
// Async Thunks

// REGISTER NEW USER
export const register = createAsyncThunk(
  "users/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(
        "/api/users/register",
        { name, email, password },
        config
      );
      // Optionally, auto-login after registration:
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue(message);
    }
  }
);

// LOGIN USER
export const login = createAsyncThunk(
  "users/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue(message);
    }
  }
);

// GET USER DETAILS
export const getUserDetails = createAsyncThunk(
  "user/details",
  async (id, { getState, rejectWithValue }) => {
    try {
      const {
        user: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`/api/users/${id}`, config);
      return data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue(message);
    }
  }
);

// Initial State
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  userDetails: { user: {} },
  loading: false,
  error: null,
  updateProfile: { loading: false, success: false, error: null },
};

// Create the Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Synchronous logout action
    logout(state) {
      state.userInfo = null;
      state.userDetails = { user: {} };
      localStorage.removeItem("userInfo");
    },
    // Optionally, add resets for user details or updateProfile state
    resetUserDetails(state) {
      state.userDetails = { user: {} };
    },
    resetUpdateProfile(state) {
      state.updateProfile = { loading: false, success: false, error: null };
    },
  },
  extraReducers: (builder) => {
    // REGISTER
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // LOGIN
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // GET USER DETAILS
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.userDetails.loading = true;
        state.userDetails.error = null;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.userDetails.loading = false;
        state.userDetails.user = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.userDetails.loading = false;
        state.userDetails.error = action.payload;
      });
  },
});

export const { logout, resetUserDetails, resetUpdateProfile } =
  userSlice.actions;

export default userSlice.reducer;
