import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId


  apiKey: "AIzaSyAa02IHQ3pxR66LLUSAaJL_xNT_zLv1foI",
  authDomain: "cars-website-80f67.firebaseapp.com",
  projectId: "cars-website-80f67",
  storageBucket: "cars-website-80f67.appspot.com",
  messagingSenderId: "485335943917",
  appId: "1:485335943917:web:24323c3c7317ba23a75ae4"
};

const app = initializeApp(firebaseConfig);

export default app;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAzaV2f4vf0Ra_exbrZB6AhV062pw9--7I",
//   authDomain: "sell-my-car-1290d.firebaseapp.com",
//   projectId: "sell-my-car-1290d",
//   storageBucket: "sell-my-car-1290d.appspot.com",
//   messagingSenderId: "165968801574",
//   appId: "1:165968801574:web:43d5d2e54fe78f5e9c5be7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);