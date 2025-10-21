window.onload = function () {
}

// Your web app's Firebase configuration
var firebaseConfig = {
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
const auth = firebase.auth();
const database = firebase.database();
const firestore = firebase.firestore();
const app_id = "1:552093451342:web:78c7a4e54678c417ff2f1f";

const timestamp = firebase.firestore.FieldValue.serverTimestamp(); 

// Get a non-default Storage bucket
const storage = firebase.storage();

/* auth.onAuthStateChanged(function (user) {
  if (user) {
    
  } else {
    // No user is signed in.
  }
}); */

$(document).ready(function () {
  $(".joinBtn_a").click(function () {
    $('.join').show();
    $('.linqin').hide();
  });
});

function sideNav() {
  if ($('.join').is(":visible")) {
    $('.join').hide();
    $('.linqin').show();
  } else {
    //window.location.href = "../index.html";
    window.parent.$('#modalCancel').click();
}
}

// Set up our register function
function join() {
  // Get all our input fields
  username = document.getElementById('user_name').value;
  firstname = document.getElementById('first_name').value;
  lastname = document.getElementById('last_name').value;
  email = document.getElementById('user_email').value;
  password = document.getElementById('user_password').value;
  confirm_password = document.getElementById('confirm_user_password').value;

  if (inputValidation(username, firstname, lastname, email, password, confirm_password)) {
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
      .then(function () {
        
        // Declare user variable
        let userId = auth.currentUser.uid

        // Add this user to Firebase Database
        let database_ref = database.ref()

        // Create User data
        let user_data = {
          username: username,
          email: email,
          firstname: firstname,
          lastname: lastname,
          last_login: Date.now()
        }

        // Push to Firebase Database
        database_ref.child('profiles/' + userId).set(user_data);

        let linqData = {
          createdDate: firebase.firestore.FieldValue.serverTimestamp(),
        }
        // Push to Firestore
        firestore.collection('linq-linq').doc(userId).set(linqData);  

        localStorage.setItem("temp_userId", userId);
        localStorage.setItem('currentView', 'editMyLinq');       

        function timeout(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }
      
        async function refresh() {
          await timeout(1500);
          window.location.href = "../linq/linq.html";
        }
      
        refresh();
      })
      .catch(function (error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
      });
  }
}

// Set up our login function
function linqIn() {
  // Get all our input fields
  email = document.getElementById('linqin_user_email').value
  password = document.getElementById('linqin_user_password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password: is empty or invalid!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref()

      // Create User data
      var user_data = {
        last_login: Date.now()
      }

      // Push to Firebase Database
      database_ref.child('profiles/' + user.uid).update(user_data)

      localStorage.setItem("temp_userId", user.uid)

      window.location.href = "../linq/linq.html";
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message

      alert(error_message)
    })
}

function inputValidation(username, firstname, lastname, email, password, confirm_password) {

  if (validate_username(username) == false) {
    alert('Username is: empty or invalid!')
    return false
    // Don't continue running the code
  } else if (validate_firstname(firstname) == false) {
    alert('Firstname is: empty or invalid!')
    return false
    // Don't continue running the code
  } else if (validate_lastname(lastname) == false) {
    alert('Lastname is: empty or invalid!')
    return false
    // Don't continue running the code
  } else if (validate_email(email) == false) {
    alert('Email is: empty or invalid!')
    return false
    // Don't continue running the code
  } else if (validate_password(password) == false) {
    alert('Password is: empty or invalid!')
    return false
    // Don't continue running the code
  } else if (validate_confirm_password(password, confirm_password) == false) {
    alert('Confirm Password: is empty or not matched!')
    return false
    // Don't continue running the code
  } else {
    return true
  }

}

// Validate Functions
function validate_username(username) {
  if (username != '') {
    // Username is valid
    return true
  } else {
    // Username is not valid
    return false
  }
}

function validate_firstname(firstname) {
  if (firstname != '') {
    // Firstname is valid
    return true
  } else {
    // Firstname is not valid
    return false
  }
}

function validate_lastname(lastname) {
  if (lastname != '') {
    // Lastname is valid
    return true
  } else {
    // Lastname is not valid
    return false
  }
}

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password == '' || password < 6) {
    return false
  } else {
    return true
  }
}

function validate_confirm_password(password, confirm_password) {
  if (confirm_password == '' || confirm_password != password) {
    // Confirm password not matched
    return false
  } else {
    // Confirm password matched
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}


