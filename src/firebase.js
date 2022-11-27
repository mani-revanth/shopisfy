


import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAt1b7UdBtpA8UyworMxsfXUTHeyTkkXVA",
  authDomain: "shopify-authentication-15fd1.firebaseapp.com",
  projectId: "shopify-authentication-15fd1",
  storageBucket: "shopify-authentication-15fd1.appspot.com",
  messagingSenderId: "1038872243982",
  appId: "1:1038872243982:web:ce8475ec8011db0a1d315f",
  measurementId: "G-P9KH6KG5RY"
};



const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;