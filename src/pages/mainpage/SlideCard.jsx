import Sdata from "./Sdata";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";

let count = 0;
let slideInterval;
const SlideCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    startSlider();

    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };
  const handleOnNextClick = () => {
    count = (count + 1) % Sdata.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = Sdata.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  return (
    <>
      <div
        ref={slideRef}
        className="border border-2 w-full relative rounded-lg select-none"
      >
        <div className=" flex justify-between p-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-justify text-lg md:text-xl">
              {Sdata[currentIndex].title}
            </h1>
            <p className="text-justify text-base md:text-lg leading-1">
              {Sdata[currentIndex].desc}
            </p>
            <div>
              <button className="p-1.5 object-contain bg-sky-400 rounded-lg text-white text-lg">
                Visit Collections
              </button>
            </div>
          </div>
          <div className="">
            <img
              src={Sdata[currentIndex].cover}
              alt={Sdata[currentIndex].id}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-center ">
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <AiOutlineLeft size={25} />
          </button>
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <AiOutlineRight size={25} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideCard;
