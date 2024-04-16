import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";

const app = initializeApp({
     apiKey: "AIzaSyCJXh_1pToQcxDIosKMsQh2zxrnZxFd_4g",
  authDomain: "testinappsolution.firebaseapp.com",
  databaseURL: "https://testinappsolution.firebaseio.com",
  projectId: "testinappsolution",
  storageBucket: "testinappsolution.appspot.com",
  messagingSenderId: "762256549854",
  appId: "1:762256549854:web:920c6ba517c22f23829f4f",
  measurementId: "G-GRNVY6X8TL"
});

export const db = getFirestore(app);
export const careersCollection = collection(db, 'careers');
export const getInTouchCollection = collection(db, 'getInTouch');
