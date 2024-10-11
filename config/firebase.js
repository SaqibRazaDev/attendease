import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyCTLDZ1lDLqP-gqEOGTeaTq1IVfNoLt4HE",
  authDomain: "attendease-a6018.firebaseapp.com",
  projectId: "attendease-a6018",
  storageBucket: "attendease-a6018.appspot.com",
  messagingSenderId: "52117334260",
  appId: "1:52117334260:web:4652e8a293fd4e508a96a1",
  measurementId: "G-97S8CWZHFS"
};



export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);