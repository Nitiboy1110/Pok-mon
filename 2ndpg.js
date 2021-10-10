
const firebaseConfig = {
    apiKey: "AIzaSyATRBFEss96Uai0-uirz6BZXUo7sTfgCkc",
    authDomain: "i-m-fire.firebaseapp.com",
    databaseURL: "https://i-m-fire-default-rtdb.firebaseio.com",
    projectId: "i-m-fire",
    storageBucket: "i-m-fire.appspot.com",
    messagingSenderId: "535340197565",
    appId: "1:535340197565:web:826d2658ccea4152e9b9d4"
  }; firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   document.getElementById("user__________name").innerHTML = "Welcome "+ user_name + "😡😡😡😡😡😡" ;

   function addRoom()
   {
         room_name = document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
         purpose : "Adding Room Name"});
         localStorage.setItem("room_name", room_name);
         window.location = "kwitter_page.html";
    }
       

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
    document.getElementById("output").innerHTML +=row;
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";

}

function logout()
{
    localStorage.removeItem(room_name);
    localStorage.removeItem(user_name);
    window.location = "index.html";
}