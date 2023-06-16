import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectUserID } from "../redux/authSlice";
const Userdetails = () => {
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const { signOutCall } = useAuthentication();
  const userId = useSelector(selectUserID);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOutCall();
    navigate("/");
  };
  useEffect(() => {
    const subscribe = async () => {
      try {
        const response = await axios.get(
          `https://api-9av6.onrender.com/api/users/${userId}`,
        );
        setUserDetails(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    return () => subscribe();
  }, [userId]);
  if (loading) {
    return <div>Loading..</div>;
  }
  return (
    <div className="min-h-[30vh] flex flex-col items-center justify-center max-w-[90%] m-auto mt-12 gap-8">
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Name</div>
              <div className="px-4 py-2 capitalize">{userDetails?.name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email</div>
              <div className="px-4 py-2">
                <div className="text-blue-800">{userDetails?.email}</div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Contact No.</div>
              <div className="px-4 py-2">
                {userDetails?.mobile || "Update your number"}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email Verify</div>
              <div className="px-4 py-2">
                {userDetails?.isEmailVeried ? "Yes" : "Verify your email"}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Address</div>
              <div className="px-4 py-2">
                {userDetails?.address || "Update your address"}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">State</div>
              <div className="px-4 py-2">
                {userDetails?.state || "Update your address"}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Country</div>
              <div className="px-4 py-2">{userDetails?.country}</div>
            </div>
          </div>
        </div>
        <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
          Update Profile
        </button>
      </div>
      <button
        className="flex-start px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Userdetails;
