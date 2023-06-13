import React from "react";

const Categories = () => {
  return (
    <div className="flex h-80 gap-12 m-4">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1 flex gap-4 ">r1</div>
        <div className="flex-1 flex gap-4">r2</div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1 flex gap-4 h-20">
          <img
            src="./images/peakpx.jpg"
            alt="hi"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1 flex gap-4">r4</div>
        <div className="flex-1 flex gap-4">r5</div>
      </div>
    </div>
  );
};

export default Categories;
