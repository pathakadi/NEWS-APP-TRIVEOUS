// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd2bh-CecEsva0aCRtuuLmddf8LFrjIZU",
  authDomain: "news-auth-1bb25.firebaseapp.com",
  projectId: "news-auth-1bb25",
  storageBucket: "news-auth-1bb25.appspot.com",
  messagingSenderId: "907763943994",
  appId: "1:907763943994:web:3d3112b50b06fc52bbc303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);