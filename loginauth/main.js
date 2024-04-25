import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
//import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_wqzFG7vhfAvvyeXKF883WwPBh6I_HHw",
  authDomain: "login-b332f.firebaseapp.com",
  projectId: "login-b332f",
  storageBucket: "login-b332f.appspot.com",
  messagingSenderId: "1068763501518",
  appId: "1:1068763501518:web:59d2ee55af8a424419119f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();


const googlelogin = document.getElementById("googleLog");
googlelogin.addEventListener("click", function (){
  //alert(5)
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    window.location.href="../logged.html";
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
  });




})


/*
const submit = document.getElementById("login");
submit.addEventListener("click", function (event) {
  event.preventDefault()

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})

*/
