// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANzRFL712Zi2UOnFBx93gOYC3j77ZCIis",
  authDomain: "proyecto-clase-react.firebaseapp.com",
  projectId: "proyecto-clase-react",
  storageBucket: "proyecto-clase-react.appspot.com",
  messagingSenderId: "384876369084",
  appId: "1:384876369084:web:2019db98bd14e10bcbecb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)