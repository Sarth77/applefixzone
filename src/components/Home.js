import Product from './Product';
import {useEffect, useState} from "react";
import Footer from './Footer';
import DataService from "../services/service"
const image = require("../images/logo-black.png");

export default function Home() {
    const [productsInfo,setproductsInfo] = useState([])
  const [phrase,setphrase] = useState('')
  useEffect(()=>{
    const fetchProducts = async () => {
      const data = await DataService.getAllProducts(); 
      setproductsInfo(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
    }
    fetchProducts();
  },[])
  const d = productsInfo.map((p)=>p.category)
  const categoriesNames = [...new Set(d)]

  let products;
  let p = phrase.toLowerCase();
  console.log(p);
  if(p){
    products = productsInfo.filter(p => p.name.toLowerCase().includes(phrase));
  }else{
    products = productsInfo;
  }
  return (
    <>
    <div className="fixed top-0 bg-white p-5 flex justify-between w-full">
    <div className="rounded-xl w-24 ">
        <img className="object-cover border" src={image} alt="" />
      </div>
      <input value={phrase} onChange={e => setphrase(e.target.value)} type="text" placeholder='Search Products..' className='bg-gray-100 w-3/5 py-1 px-4 mx-4 rounded-xl'/>
      <div className="mt-3 flex place-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline-block h-8 w-8 rounded-full ring-3 ring-white border -mt-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      </div>
      </div>
      <div className="px-5 pb-5 flex flex-col min-h-screen mb-20 mt-20">
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            {products.find(p => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products.filter(p => p.category === categoryName).map(productInfo => (
                    <div key={productInfo.id} className="px-5 snap-start">
                      <Product {...productInfo} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 w-full">
      <Footer/>
      </div>
    </>
  )
}