import React from "react";

const Head = () => {
  return (
    <>
      <section className="bg-[#0f3460] px-0 py-[10px] text-white w-full">
        <div className="max-w-[90%] m-auto md:flex md:flex-row sm:flex sm:flex-col md:justify-between md:items-center ">
          <div className="flex justify-between flex-wrap">
            <div className="flex items-center gap-x-3">
              <i className="fa fa-phone"></i>
              <label className="mr-[30px] text-sm">
                <a href="tel:+919711724470">+919717124470</a>
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <i className="fa fa-envelope"></i>
              <label className="text-sm">
                <a href="mailto:support@applefixzone.com">
                  support@applefixzone.com
                </a>
              </label>
            </div>
          </div>
          <div className="flex items-center flex-wrap">
            <div className="flex items-center justify-between">
              <label className="mr-[30px] text-sm">FAQ's</label>
              <label className="mr-[30px] text-sm">Need Help</label>
              <div className="flex items-center justify-center">
                <span>🇮🇳</span>
                <label className="mr-[30px] text-sm">EN</label>
              </div>
              <div className="flex items-center justify-center">
                <span>🇮🇳</span>
                <label className="mr-[30px] text-sm">INR</label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
