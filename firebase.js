import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBypvy25taphD7NtfYruXzYp-RFaqsLNy0",
  authDomain: "greenwaycabpln-app.firebaseapp.com",
  projectId: "greenwaycabpln-app",
  storageBucket: "greenwaycabpln-app.firebasestorage.app",
  messagingSenderId: "23971546888",
  appId: "1:23971546888:web:6e4300c74c6518abde8ebd"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 

// Helper for image upload
export const uploadImage = async (file, path) => {
  const storageRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};