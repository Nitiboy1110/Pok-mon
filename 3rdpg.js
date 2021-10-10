const firebaseConfig = {
    apiKey: "AIzaSyBGUpGm3i5zM_WYcmAaZsiGNwHX_zVh_lA",
    authDomain: "chalhat-tupaglhhai-veryangery.firebaseapp.com",
    databaseURL: "https://chalhat-tupaglhhai-veryangery-default-rtdb.firebaseio.com",
    projectId: "chalhat-tupaglhhai-veryangery",
    storageBucket: "chalhat-tupaglhhai-veryangery.appspot.com",
    messagingSenderId: "109084205033",
    appId: "1:109084205033:web:1b0d39dd7316d07bebf578"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
      msg = document.getElementById("msg_msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0});
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    name_with_tag = message_data['name'];
    message = message_data['message'];
    like =  message_data['like'];
    name_with_tag = "<h4>" + name_with_tag + "<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message +"</h4>";
    like_with_tag = "<button class='btn btn-warning' id=" + firebase_message_id +  " value=" + like  + "onclick='update_like(this.id)' >";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> like :" + like + "</span> </button> <hr>";
    row = name_with_tag+message_with_tag+like_with_tag+span_with_tag;
    document.getElementById("out_put").innerHTML +=row;

//End code
 } });  }); }
getData();

function update_like(message_id)
{
    console.log("clicked on like button" + message_id );
    button_id = message_id ; 
    likes = document.getElementById(button_id).value ;
    update_likes = Number(likes)+1 ;
    firebase.database().ref(room_name).child(message_id).update({
        like : update_likes
    });

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}