
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCb8HQadkZz_WHIwOQoJXlfB5_w2MysKYM",
  authDomain: "applefixzone01.firebaseapp.com",
  projectId: "applefixzone01",
  storageBucket: "applefixzone01.appspot.com",
  messagingSenderId: "285786053682",
  appId: "1:285786053682:web:ece2d65b4f02c13bc1f02b",
  measurementId: "G-E18SPWPDMT"
};

const app = initializeApp(firebaseConfig);
const storageRef = getStorage(app);
const db = getFirestore(app);

export {db,storageRef};