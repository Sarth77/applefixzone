import Sdata from "./Sdata";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const SlideCard = () => {
  return (
    <>
      <div className="border border-2 w-full relative rounded-lg select-none">
        <div className=" flex justify-between p-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-justify text-lg md:text-xl">
              {Sdata[0].title}
            </h1>
            <p className="text-justify text-base md:text-lg leading-1">
              {Sdata[0].desc}
            </p>
            <div>
              <button className="p-1.5 object-contain bg-sky-400 rounded-lg text-white text-lg">
                Visit Collections
              </button>
            </div>
          </div>
          <div className="">
            <img
              src={Sdata[0].cover}
              alt={Sdata[0].id}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-center ">
          <button className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition">
            <AiOutlineLeft size={25} />
          </button>
          <button className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition">
            <AiOutlineRight size={25} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideCard;
