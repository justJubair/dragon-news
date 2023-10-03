
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvVcCNMW3isbv2Ko7SDKhxiJBPleDsLxQ",
  authDomain: "dragon-news-4ea04.firebaseapp.com",
  projectId: "dragon-news-4ea04",
  storageBucket: "dragon-news-4ea04.appspot.com",
  messagingSenderId: "844827707245",
  appId: "1:844827707245:web:8c60677c477f5c0f197c64"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 