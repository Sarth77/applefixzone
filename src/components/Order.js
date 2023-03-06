import Footer from "./Footer";
import { useContext , useEffect,useState} from "react";
import { OrdersContext } from "./Orderscontext";
const image = require("../images/logo-black.png");
export default function Order() {

    const {purchaseOrders} = useContext(OrdersContext)
    const [prod, setProd] = useState([]);
    useEffect(() => {
        const fetchdata = () => {
          const uniqId = [...new Set(purchaseOrders)];
          const d = uniqId.join(',');
    
            fetch(`https://appleserver.onrender.com/property/search`, {
              method: "POST",
              crossDomain: true,
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
              }, body: JSON.stringify({
                id: d
              })
            })
              .then(res => res.json())
              .then((data) => {
                if (data.status === "Success") {
                  setProd(data.details)
                }
                else if(data.status === "Failed") {
                  setProd([])
                }
                else{
                  setProd([])
                }
              });
        }
    
        fetchdata();
    
      }, [purchaseOrders])
    return (
        <>
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
            You have not purchase any product yet !!
          </div>
        )}
        {prod.length && prod.map(pro => (
          <div className="flex mb-5 overflow-scroll" key={pro._id}>
            <div>
            <div className="bg-gray-100 p-3 rounded-xl shrink-0">
              <img className="w-24" src={require(`../images/${pro.name}.png`)} alt="" />
            </div>
            <div className="pl-4">
              <h3 className="font-bold text-lg capitalize">{pro.name}</h3>
              <p className="text-sm leading-4 text-gray-500">{pro.description}</p>
              <div className="flex">
                <div className="grow">${pro.price}</div>
                <div>
                  <span className="px-2">
                    {purchaseOrders.filter(id => id === pro._id).length}
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
        </div>
        <Footer/>
        </>
    )
}