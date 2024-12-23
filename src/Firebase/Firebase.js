
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQv00HBY58n7pBFtjb1uvX1HAR1TTSfUU",
  authDomain: "email--password-auth-ac385.firebaseapp.com",
  projectId: "email--password-auth-ac385",
  storageBucket: "email--password-auth-ac385.firebasestorage.app",
  messagingSenderId: "148442076434",
  appId: "1:148442076434:web:a30b9da22ed729bbb50fcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth ;