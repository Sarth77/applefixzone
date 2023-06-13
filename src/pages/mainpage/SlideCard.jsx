import Sdata from "./Sdata";
import { useNavigate } from "react-router-dom";

const SlideCard = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="border border-2 w-full relative rounded-lg select-none">
        <div className=" flex justify-between p-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-justify text-lg md:text-xl">
              {Sdata[0].title}
            </h1>
            <p className="text-justify text-base md:text-lg leading-1">
              {Sdata[0].desc}
            </p>
            <div>
              <button
                className="p-1.5 object-contain bg-sky-400 rounded-lg text-white text-lg"
                onClick={() => navigate("/products")}
              >
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
      </div> */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex p-6 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {Sdata[0].title}
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
              <button
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() => navigate("/products")}
              >
                Visit Collections
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={Sdata[0].cover}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SlideCard;
