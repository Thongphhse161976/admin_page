
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqV3fxcpWn8YnOgI5M_vyFGW3VFjVL5uM",
  authDomain: "vinhome-ecommerence.firebaseapp.com",
  databaseURL: "https://vinhome-ecommerence-default-rtdb.firebaseio.com",
  projectId: "vinhome-ecommerence",
  storageBucket: "vinhome-ecommerence.appspot.com",
  messagingSenderId: "778533524226",
  appId: "1:778533524226:web:739e59d182c25b0cc9e81b",
  measurementId: "G-M300G60503"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

