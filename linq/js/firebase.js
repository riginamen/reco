var firebaseConfig = {
    apiKey: "AIzaSyB6NKEyvenEOhL1baYRakomWlfKHa-uux4",
  authDomain: "linqop.firebaseapp.com",
  databaseURL: "https://linqop.firebaseio.com",
  projectId: "linqop",
  storageBucket: "linqop.appspot.com",
  messagingSenderId: "552093451342",
  appId: "1:552093451342:web:78c7a4e54678c417ff2f1f"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();
var db = firebase.firestore();