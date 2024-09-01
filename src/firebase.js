  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getDatabase } from "firebase/database";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAgBmfWRbE_fNzx-gaGAPAuytRdRmEXR8A",
    authDomain: "personal-use-1857a.firebaseapp.com",
    projectId: "personal-use-1857a",
    storageBucket: "personal-use-1857a.appspot.com",
    messagingSenderId: "123791548487",
    databaseURL: "https://personal-use-1857a-default-rtdb.asia-southeast1.firebasedatabase.app",
    appId: "1:123791548487:web:c099989d47700c36981162",
    measurementId: "G-ZLTH39PEQ1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  export { db };