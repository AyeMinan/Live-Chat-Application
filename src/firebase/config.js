import { initializeApp } from "firebase/app";
import {getFirestore, serverTimestamp} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjn3ycHPMlc_DBZEGRLlWaXEDaGZJidHg",
  authDomain: "vue-blog-system-8c490.firebaseapp.com",
  projectId: "vue-blog-system-8c490",
  storageBucket: "vue-blog-system-8c490.appspot.com",
  messagingSenderId: "206387254908",
  appId: "1:206387254908:web:36760d4d81af4dff1f1bf9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const timeStamp = serverTimestamp();
//  let timeStamp = firebase.firestore.FieldValue.serverTimestamp;
export {db}