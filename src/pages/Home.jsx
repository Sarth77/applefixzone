import React, { useEffect, useState } from 'react'
import DataService from "../services/services";

const Home = () => {
  const [productsInfo, setproductsInfo] = useState([])
  const [phrase,setphrase] = useState('')

  useEffect(() => {
    fetchProducts()

  }, [])
  const fetchProducts = async () => {
    const data = await DataService.getAllProducts(); 
    setproductsInfo(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
    
  }

  let products;
  let p = phrase.toLowerCase();
  if(p){
    products = productsInfo.filter(p => p.name.toLowerCase().includes(phrase));
  }else{
    products = productsInfo;
  }

  const categoriesNames = [...new Set(productsInfo.map((p) => p.category))]
  return (
    <div>
     <div className="px-5 pb-5 flex flex-col min-h-screen mb-20">
      {categoriesNames.map(categoryName => (
        <div key={categoryName}>
          {products.find(p => p.category === categoryName) && (
            <div>
              <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
              <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                {products.filter(p => p.category === categoryName).map(productInfo => (
                  <div className="px-5 snap-start" key={productInfo.id}>
                    <div className="w-52 flex flex-col">
                      <div className="bg-blue-100 p-5 rounded-xl">
                        <img src={productInfo.picture} alt={productInfo.name}/>
                      </div>
                      <div className="mt-2">
                        <h3 className="font-bold capitalize">{productInfo.name}</h3>
                      </div>
                      <div className='text-sm mt-1 leading-4 text-gray-500 h-20 overflow-scroll'>
                       {productInfo.description}
                      </div>
                      <div className="flex mt-1">
                        <div className="text-2xl font-bold grow ">{productInfo.price}</div>
                        <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
     </div>
    </div>

  )
}

export default Home
