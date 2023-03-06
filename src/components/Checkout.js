import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { ProductsContext } from "./Productscontext";
import { useNavigate } from "react-router-dom";
import { OrdersContext } from "./Orderscontext";
import DataService from "../services/service"
const image = require("../images/logo-black.png");
export default function Checkout() {
  const navigate = useNavigate();
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext)
  const {setPurchaseOrders} = useContext(OrdersContext)
  function hand(id){
    setPurchaseOrders(prev => [...prev, id])
    setSelectedProducts([]);
    navigate('/orders');
  }
  function movetoOrders(arr, id) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === id) {
        let val = arr[i];
        setPurchaseOrders(prev => [...prev, val])
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    setSelectedProducts(arr);
  }
  const [prod, setProd] = useState([]);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    const fetchdata = async () => {
      const uniqId = [...new Set(selectedProducts)];
      const d = uniqId.join(',');
      console.log(d)
      const docSnap = await DataService.getProduct(d); 
      if(docSnap.exists()) {
        console.log("inside if",docSnap.data())
        setProd(docSnap.data());
    } else {
      console.log("inside else")
        setProd([])
    }
    }

    fetchdata();

  }, [selectedProducts])
  function addProducts(id) {
    setSelectedProducts(prev => [...prev, id])
  }
  function removeProducts(id) {
    const pos = selectedProducts.indexOf(id);
      console.log(pos,id)
    if (pos !== -1) {
      setSelectedProducts(prev => {
        return prev.filter((value, index) => index !== pos);
      })
    }
  }
  let more = -1;
  let subtotal = 0;
  let delivery =0;
  if (prod.length) {
    console.log(prod.length)
    for(let id of selectedProducts){
      const pri = prod.find(p=> p.id === id).price;
      subtotal += pri ;
    }
  }
  let check = true;
  if(subtotal >0){
    delivery = 5;
    more =0;
    check = false;
  }
const total = subtotal + delivery ;
  return (
    <div>
      <div className="fixed top-0 bg-white p-5 flex justify-between w-full">
      <div className="rounded-xl w-24 ">
        <img className="object-cover border" src={image} alt="" />
      </div>
      <div className="mt-3 flex place-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline-block h-8 w-8 rounded-full ring-3 ring-white border -mt-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      </div>
    </div>
      <div className="p-5 overflow-scroll mt-20">
        {!prod.length && (
          <div>
            No Products in your Shopping Cart
          </div>
        )}
        {prod.length && prod.map(pro => (
          <div className="flex flex-col mb-5 overflow-scroll" key={pro.id}>
            <div>
            <div className="bg-gray-100 p-3 rounded-xl shrink-0">
              <img className="w-24" src={pro.picture} alt="" />
            </div>
            <div className="pl-4">
              <h3 className="font-bold text-lg capitalize">{pro.name}</h3>
              <p className="text-sm leading-4 text-gray-500">{pro.description}</p>
              <div className="flex">
                <div className="grow">₹{pro.price}</div>
                <div>
                  <button onClick={() => removeProducts(pro.id)} className="border border-emerald-500 px-2 rounded-lg text-emerald-500">-</button>
                  <span className="px-2">
                    {selectedProducts.filter(id => id === pro.id).length}
                  </span>
                  <button onClick={() => addProducts(pro.id)} className="bg-emerald-500 px-2 rounded-lg text-white">+</button>
                </div>
              </div>
            </div>
            </div>
            <div className="p-5">
             <button onClick={() => movetoOrders(selectedProducts,pro.id)} disabled={check}className={(more === 0 ? 'bg-emerald-500 px-5 py-2 rounded-xl font-bold shadow-emerald-300 shadow-lg text-white w-full' : 'bg-emerald-500 px-5 py-2 rounded-xl font-bold shadow-emerald-300 shadow-lg text-white w-full disabled:opacity-75 cursor-not-allowed')}>Pay ${(((pro.price)*(selectedProducts.filter(id => id === pro._id).length))+5)}</button>
             </div>
          </div>
        ))}
      </div>
      <div className="px-5 mt-4 ">
        <input value={name} onChange={e => setName(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Name" />
        <input value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="email" placeholder="Email Address" />
        <input value={address} onChange={e => setAddress(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Street Address" />
        <input value={city} onChange={e => setCity(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="City and Postal code" />
      </div>
      <div className="px-5 mt-4">
        <div className="flex my-3">
          <h3 className="grow font-bold text-gray-400">Subtotal:</h3>
          <h3 className="font-bold">${subtotal}</h3>
        </div>
        <div className="flex my-3">
          <h3 className="grow font-bold text-gray-400">Deliverys:</h3>
          <h3 className="font-bold">${delivery}</h3>
        </div>
        <div className="flex my-3 pt-3 border-t border-dashed border-emerald-500">
          <h3 className="grow font-bold text-gray-400">Total:</h3>
          <h3 className="font-bold">${total}</h3>
        </div>
      </div>
      <div className="p-5 mb-20">
        <button onClick={()=> hand(selectedProducts)} disabled={check}className={(more === 0 ? 'bg-emerald-500 px-5 py-2 rounded-xl font-bold shadow-emerald-300 shadow-lg text-white w-full' : 'bg-emerald-500 px-5 py-2 rounded-xl font-bold shadow-emerald-300 shadow-lg text-white w-full disabled:opacity-75 cursor-not-allowed')}>Pay ${total}</button>
      </div>
      <Footer/>
    </div>
  );
}