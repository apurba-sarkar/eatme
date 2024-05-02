// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyB9bU-nMuGXCN7gXRpsKjmjo_AkxN0YQno",
  authDomain: "eatme-29f33.firebaseapp.com",
  projectId: "eatme-29f33",
  storageBucket: "eatme-29f33.appspot.com",
  messagingSenderId: "1050348882073",
  appId: "1:1050348882073:web:bde4101a3ffaf69ae01008",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
