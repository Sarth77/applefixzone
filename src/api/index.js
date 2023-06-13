import axios from "axios";

const baseURL = "https://api-9av6.onrender.com";

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
