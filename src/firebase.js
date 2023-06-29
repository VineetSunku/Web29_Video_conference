import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAx5HMI7sS_WAQAmghRWe5QkFqdQ5SDbQY",
  authDomain: "talkvision-605f4.firebaseapp.com",
  projectId: "talkvision-605f4",
  storageBucket: "talkvision-605f4.appspot.com",
  messagingSenderId: "896981581511",
  appId: "1:896981581511:web:cfd97d6cd0734b8ddb48e2"
  // apiKey: "AIzaSyBgMXm8LTnPwNytohXSPR1L8D_6x2c80Hw",
  // authDomain: "login-register-app-8ee6e.firebaseapp.com",
  // projectId: "login-register-app-8ee6e",
  // storageBucket: "login-register-app-8ee6e.appspot.com",
  // messagingSenderId: "669235392594",
  // appId: "1:669235392594:web:5d5fbc5e2d6504b4266f8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export const Fprovider = new FacebookAuthProvider();
export default app;


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
  // apiKey: "AIzaSyAx5HMI7sS_WAQAmghRWe5QkFqdQ5SDbQY",
  // authDomain: "talkvision-605f4.firebaseapp.com",
  // projectId: "talkvision-605f4",
  // storageBucket: "talkvision-605f4.appspot.com",
  // messagingSenderId: "896981581511",
  // appId: "1:896981581511:web:cfd97d6cd0734b8ddb48e2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);