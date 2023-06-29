import axios from "axios";

const baseURL = "https://api.applefixzone.com";

export const validateGoogleToken = async (token) => {
  try {
    const res = await axios.get(`${baseURL}/api/auth`, {
      headers: {
        Authorization: "eyJhb " + token,
      },
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getUser = async (userId) => {
  try {
    const res = await axios.get(`${baseURL}/users/${userId}`);
    return res.data;
  } catch (error) {
    return null;
  }
};
