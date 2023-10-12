
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAPIMDDR6-je1yu1CnEgIT39JEBdFVqZZw",
  authDomain: "first-project-de8fa.firebaseapp.com",
  projectId: "first-project-de8fa",
  storageBucket: "first-project-de8fa.appspot.com",
  messagingSenderId: "21698561264",
  appId: "1:21698561264:web:df240a6256f4736c67ae35",
  measurementId: "G-H436KMRF5P"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};