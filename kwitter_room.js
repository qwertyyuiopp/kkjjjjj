
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCiX_7POaKXr6SLpyNuRdlp4I8v0cAIcxw",
    authDomain: "horor-96b46.firebaseapp.com",
    projectId: "horor-96b46",
    storageBucket: "horor-96b46.appspot.com",
    messagingSenderId: "823554749856",
    appId: "1:823554749856:web:fa63df57796ae9c43460c5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

