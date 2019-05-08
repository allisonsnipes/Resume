// firebase  configuration
 var firebaseConfig = {
   apiKey: "AIzaSyABxID-9JokNwj4jCTZoTRZsDJrWbGoJjQ",
   authDomain: "hwdemo-e5ebe.firebaseapp.com",
   databaseURL: "https://hwdemo-e5ebe.firebaseio.com",
   projectId: "hwdemo-e5ebe",
   storageBucket: "hwdemo-e5ebe.appspot.com",
   messagingSenderId: "693879845437",
   appId: "1:693879845437:web:bab33654f270e99f"
 };
 // 1. Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 //establish shortcut to write code
 var database = firebase.database();

 // 2. put on event listener on the submit button to gather email addresses
 document.querySelector("#signUp").addEventListener("click", function(event) {
   event.preventDefault();

   //gather user input and initializse it to a variable that will go into the firebase database as my intial data
   var userEmails = document.querySelector("#userEmail").nodeValue.trim();

   //create local temporary object to hold user data
   var userData = {
     email: userEmails
   };

   //upload user email to the database
   database.ref().push(userData);

   //console log data to make sure everything is ok
   console.log(userData.email);

   //clears sign up box
   document.querySelector("#userEmail").value = "";
 });

 //3. create a firebase event for adding adding data
 database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());
 })

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  //save the entries for firebase storage
  var userEmails = childSnapshot.val().email;

  console.log(userEmails)
})