// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKgrVFz5HOa15sMrtD8uSp8qE8qV1ayl8",
  authDomain: "netflix-clone-19838.firebaseapp.com",
  projectId: "netflix-clone-19838",
  storageBucket: "netflix-clone-19838.appspot.com",
  messagingSenderId: "697067372283",
  appId: "1:697067372283:web:2885646028b1e7c468fa5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const logout = () => {
  signOut(auth);
};

export {auth, db, signup, login, logout };
