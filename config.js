import firebase from 'firebase';
 
  export const firebaseConfig = {
    apiKey: "AIzaSyDhIIqHjgYs7kMCcwPHprPuDvKSbnp_tCg",
    authDomain: "chess-app-6e193.firebaseapp.com",
    projectId: "chess-app-6e193",
    storageBucket: "chess-app-6e193.appspot.com",
    messagingSenderId: "245129841489",
    appId: "1:245129841489:web:1be5f9261c6ea079cfe170"
  };

  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig);
export default app.database();
