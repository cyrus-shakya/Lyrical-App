// Cyrus Shakya
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// mine web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT6_TFjlOFzN7qbvLsMdyaxNKG1J553RY",
  authDomain: "music-app-445ae.firebaseapp.com",
  projectId: "music-app-445ae",
  storageBucket: "music-app-445ae.appspot.com",
  messagingSenderId: "584619605351",
  appId: "1:584619605351:web:304780cdae6a117be503c2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
