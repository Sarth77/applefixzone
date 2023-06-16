import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authActions";
const initialState = {
  isEmailVerified: false,
  isLoggedIn: false,
  email: null,
  userName: null,
  userID: null,
  userPicture: null,
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // console.log(action.payload);
      const { email, userName, userID, userPicture, isEmailVerified } =
        action.payload;
      state.isEmailVerified = isEmailVerified;
      state.isLoggedIn = true;
      state.email = email;
      state.userName = userName;
      state.userID = userID;
      state.userPicture = userPicture;
    },
    clearUserData: (state, action) => {
      state.isEmailVerified = false;
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.userID = null;
      state.userPicture = null;
    },
  },
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.loading = false;
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      console.log("errorpayload", payload);
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setUser, clearUserData } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserName = (state) => state.auth.userName;
export const selectUserID = (state) => state.auth.userID;
export const selectUserPicture = (state) => state.auth.userPicture;

export default authSlice.reducer;
