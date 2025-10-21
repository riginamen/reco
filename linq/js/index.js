// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6NKEyvenEOhL1baYRakomWlfKHa-uux4",
    authDomain: "linqop.firebaseapp.com",
    databaseURL: "https://linqop.firebaseio.com",
    projectId: "linqop",
    storageBucket: "linqop.appspot.com",
    messagingSenderId: "552093451342",
    appId: "1:552093451342:web:78c7a4e54678c417ff2f1f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database();

    $(document).ready(function () {
        $('.linqin').click(function () {   
             
            auth.onAuthStateChanged(function(user) {        
                if (user) {
                    // User is signed in.
                    window.location.href = "/linq.html";
                } else {
                    // No user is signed in.
                    window.location.href = "/in.html";
                }
            });            
            });
        });

$('.linqin').click(function(){
    window.location.href = "/in.html";
})

$('.dev').click(function(){
    window.location.href = "/dev.html";
})

$('.linq').click(function(){
    window.location.href = "/eco.html";
})

$('.info_a').click(function(){
    window.location.href = "https://caricom.org/";
})