
const firebaseConfig = {
      apiKey: "AIzaSyCboDg38Kqei-v5RRuOUN1xEwn5ejZbjdg",
      authDomain: "kwitter-aad8f.firebaseapp.com",
      databaseURL: "https://kwitter-aad8f-default-rtdb.firebaseio.com",
      projectId: "kwitter-aad8f",
      storageBucket: "kwitter-aad8f.appspot.com",
      messagingSenderId: "327536323681",
      appId: "1:327536323681:web:ad034d6982c96b9bf9ce20",
      measurementId: "G-8EQGKPQBDP"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
