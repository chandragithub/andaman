// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbn2Sxs1tpuTVgyiydz510gq7o5lcxCQ8",
  authDomain: "andamanviewapp.firebaseapp.com",
  databaseURL: "https://andamanviewapp-default-rtdb.firebaseio.com",
  projectId: "andamanviewapp",
  storageBucket: "andamanviewapp.firebasestorage.app",
  messagingSenderId: "854011906337",
  appId: "1:854011906337:web:985f3b7d71f306bd035660",
  measurementId: "G-6CLBEMZY4J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }; 
