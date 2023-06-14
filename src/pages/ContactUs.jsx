import React from "react";
import { useSelector } from "react-redux";
import { selectUserName, selectEmail } from "../redux/authSlice";
const ContactUs = () => {
  const userEmail = useSelector(selectEmail);
  const userName = useSelector(selectUserName);
  return (
    <div className="max-w-[90%] m-auto">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto ">
          <div className="flex flex-col text-center w-full mb-8">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h2>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap" autoComplete="off">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    autoComplete="off"
                    disabled={userName ? true : false}
                    value={userName || ""}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    disabled={userName ? true : false}
                    value={userEmail || ""}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center self-center">
                <a
                  href="mailto:support@applefixzone.com"
                  className="text-indigo-500 text-center"
                >
                  support@applefixzone.com
                </a>
                <p className="hidden leading-normal my-5">
                  49 Smith St. Saint Cloud, MN 56301
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
