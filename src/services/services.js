import { db,storageRef } from "../firebase";
import { collection,getDocs,getDoc,doc } from "firebase/firestore";
import { ref,listAll } from "firebase/storage";

const dataRef = collection(db,"products") ;
const imageRef = ref(storageRef,"Boards");

class DataService {

    getAllProducts =() =>{
        return getDocs(dataRef)
    }

    getProduct =(id)=>{
        const productDoc = doc(db,"products",id);
        return getDoc(productDoc);
    }
    getAllImages = ()=>{
        return listAll(imageRef)
    }
    
}

export default new DataService();