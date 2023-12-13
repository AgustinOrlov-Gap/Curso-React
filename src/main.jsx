import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { CartProvider } from './components/CartContent/CartContext';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoa2y5tIrFXtHEPMxTDPr_aZkYJ_tXc_Y",
  authDomain: "krakenshop-e4712.firebaseapp.com",
  projectId: "krakenshop-e4712",
  storageBucket: "krakenshop-e4712.appspot.com",
  messagingSenderId: "1080391918521",
  appId: "1:1080391918521:web:29eac180704c483a578c68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <ChakraProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ChakraProvider>
);
