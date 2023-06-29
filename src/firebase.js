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
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export const Fprovider = new FacebookAuthProvider();
export default app;


