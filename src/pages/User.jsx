import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";
const Userdetails = () => {
  const { isLoading, signOutCall } = useAuthentication();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOutCall();
    navigate("/");
  };
  if (isLoading) {
    return <div>Loading..</div>;
  }
  return (
    <div className="min-h-[30vh] flex items-center justify-center">
      <button
        className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Userdetails;
