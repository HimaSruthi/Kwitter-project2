// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBI6UTYWCSfM22JzU_sAL-2wh4kum14Y2M",
  authDomain: "kwitter-project-3-9f681.firebaseapp.com",
  projectId: "kwitter-project-3-9f681",
  storageBucket: "kwitter-project-3-9f681.appspot.com",
  messagingSenderId: "668335438461",
  appId: "1:668335438461:web:729f0d03262da84d2acf14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  
  function addRoom (){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child("room_name").update({
          purpose:"adding room name"
    });
    localStorage.setitem("room_name",room_name);
    window.location="kwitter_page.html";


}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name-"+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='rediractToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    
    //End code
    });});}
getData();
function rediractToRoomName(name){
    console.log(name);
    localStorage.setitem("room_name",name);
    window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
  
}
