import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCEW__OTguPGNnOjjUEhOZ2IjPaggnvzBc',
  authDomain: 'my-react-blog-9d577.firebaseapp.com',
  projectId: 'my-react-blog-9d577',
  storageBucket: 'my-react-blog-9d577.appspot.com',
  messagingSenderId: '563757242539',
  appId: '1:563757242539:web:41b6cf8ec409b0c4c9bfee',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
