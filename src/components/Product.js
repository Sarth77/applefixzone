import { useContext } from "react";
import { ProductsContext } from "./Productscontext";

export default function Product({id,name,price,description,picture}){
  const {setSelectedProducts} = useContext(ProductsContext);

const addProduct = ()=>{
    setSelectedProducts(prev => [...prev,id])
  }
    return(
        <div className="w-52 flex flex-col">
            <div className="bg-blue-100 p-5 rounded-xl">
              <img src={picture} alt={name} />
            </div>
            <div className="mt-2">
              <h3 className="font-bold capitalize">{name}</h3>
            </div>
            <p className="text-sm mt-1 leading-4 text-gray-500 h-20 overflow-scroll">{description}</p>
            <div className="flex mt-1">
              <div className="text-2xl font-bold grow">₹{price}</div>
              <button onClick={addProduct} className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
            </div>
          </div>
    );
}