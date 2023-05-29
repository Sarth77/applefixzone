import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <>
      <Link to={`/product/${item.id}`}>
        {/* <div className="w-[280px] flex flex-col gap-[10px]">
          <div className="w-[100%] h-[400px] overflow-hidden relative">
            {item.isNew && (
              <span className="z-[3] absolute top-1 left-1 p-1 bg-white text-green-500 text-xs font-medium">
                New Added
              </span>
            )}
            <img
              src={item.img}
              alt=""
              className="mainImg z-[1] hover:-z-[1] w-[100%] h-[100%] object-cover absolute"
            />
            {item.img2 && (
              <img
                src={item.img2}
                alt=""
                className="secondImg hover:z-[1] w-[100%] h-[100%] object-cover absolute"
              />
            )}
          </div>
          <h2 className="text-base font-normal">{item.title}</h2>
          <div className="flex gap-3 text-base font-medium">
            <h3 className="text-zinc-400 line-through">${item.oldPrice}</h3>
            <h3>${item.price}</h3>
          </div>
        </div> */}
        <div className="w-52  flex flex-col">
          <div className="bg-blue-100 p-5 h-52 rounded-xl overflow-hidden relative flex items-center justify-center">
            {item.isNew && (
              <span className="z-[3] absolute top-1 left-1 p-1 bg-white text-green-500 text-xs font-medium">
                New Added
              </span>
            )}
            <img
              src={item.img}
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="mt-2">
            <h3 className="font-bold capitalize truncate">{item.title}</h3>
          </div>
          <p className="text-sm mt-1 leading-4 text-gray-500 h-20 truncate">
            {item.title}
          </p>
          <div className="flex">
            <div className="text-2xl font-bold grow flex gap-3">
              <h3 className="text-zinc-400 line-through">₹{item.oldPrice}</h3>
              <h3>₹{item.price}</h3>
            </div>
            <button className="bg-emerald-400 text-white px-3 rounded-xl flex justify-center items-center">
              +
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
