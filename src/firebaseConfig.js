

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDzghbRAsX1A_1iOMC3KjnvKl5Qun4iPtQ",
  authDomain: "new-project-f5211.firebaseapp.com",
  databaseURL: "https://new-project-f5211-default-rtdb.firebaseio.com",
  projectId: "new-project-f5211",
  storageBucket: "new-project-f5211.appspot.com",
  messagingSenderId: "768519204800",
  appId: "1:768519204800:web:89ffcd25d5bb278f056225"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)