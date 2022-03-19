
var firebaseConfig = {
      apiKey: "AIzaSyCdWPs08C-oKhpHtH0z9OaXOst6q-8C2Os",
      authDomain: "kwitter-6bd81.firebaseapp.com",
      databaseURL: "https://kwitter-6bd81-default-rtdb.firebaseio.com",
      projectId: "kwitter-6bd81",
      storageBucket: "kwitter-6bd81.appspot.com",
      messagingSenderId: "90363506789",
      appId: "1:90363506789:web:e9a723757201803c4ad68c"
    };

      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{

  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
 });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}
