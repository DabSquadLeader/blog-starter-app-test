// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzghbRAsX1A_1iOMC3KjnvKl5Qun4iPtQ",
  authDomain: "new-project-f5211.firebaseapp.com",
  projectId: "new-project-f5211",
  storageBucket: "new-project-f5211.appspot.com",
  messagingSenderId: "768519204800",
  appId: "1:768519204800:web:89ffcd25d5bb278f056225"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
