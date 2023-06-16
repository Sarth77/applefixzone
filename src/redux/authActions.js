import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "https://api-9av6.onrender.com";

export const registerUser = createAsyncThunk(
  "/api/auth/signup",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/auth/signup`,
        {
          name: name,
          email: email,
          password: password,
        },
        config,
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response);
      }
    }
  },
);
