import React from "react";

const Login = () => {
  return (
    <div className="max-w-[90%] m-auto py-6 border border-2">
      <div className="flex flex-col md:flex-row md:justify-between border border-1 border-red-500 md:gap-0 gap-24">
        <div className="border border-1 border-blue-500 flex flex-col justify-between">
          <div className="text-xl flex flex-wrap">
            <label className="text-zinc-600">Email</label>
            <input
              type="email"
              className="outline-none focus-none text-lg float-right"
            />
          </div>
          <div className="text-xl flex flex-wrap">
            <label className="text-zinc-600">Password</label>
            <input
              type="password"
              className="outline-none focus-none text-lg float-right"
            />
          </div>
          <div>
            <button className="bg-blue-400 text-white p-1">Login</button>
          </div>
        </div>
        <div className="border border-1 border-green-500 flex flex-col justify-between flex-wrap">
          <div className="text-xl flex flex-wrap">
            <label className="text-zinc-600">Email</label>
            <input
              type="email"
              className="outline-none focus-none text-lg float-right"
            />
          </div>
          <div className="text-xl flex flex-wrap">
            <label className="text-zinc-600">Password</label>
            <input
              type="password"
              className="outline-none focus-none text-lg float-right"
            />
          </div>
          <div className="text-xl flex flex-wrap">
            <label className="text-zinc-600">Confirm Password</label>
            <input
              type="password"
              className="outline-none focus-none text-lg float-right"
            />
          </div>
          <div>
            <button className="bg-blue-400 text-white p-1">SignUp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
