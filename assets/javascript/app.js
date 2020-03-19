
  var firebaseConfig = {
    apiKey: "AIzaSyDtKlWpVtOgNiJ7Hef-_cJ_c2DUEQfi5Do",
    authDomain: "ms-trainscheduler.firebaseapp.com",
    databaseURL: "https://ms-trainscheduler.firebaseio.com",
    projectId: "ms-trainscheduler",
    storageBucket: "ms-trainscheduler.appspot.com",
    messagingSenderId: "333536429430",
    appId: "1:333536429430:web:46a8b21de05f4a8941e657"
  };
  // this is to initialize firebase
  firebase.initializeApp(firebaseConfig);
var database = firebase.datebase();

$("#train-btn").on("click", function (event) {
    event.preventDefault();
  
    //input information goes here
    var trainName = $("#train-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var trainStart = $("#first-train-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
  
    var addTrain = {
      trainName: trainName,
      destination: destination,
      trainStart: trainStart,
      frequency: frequency,
    };
  
    database.ref().push(addTrain);


    console.log(addTrain.trainName);
    console.log(addTrain.destination);
    console.log(addTrain.trainStart);
    console.log(addTrain.frequency);
  


    $("#train-input").val("");
    $("#destination-input").val("");
    $("#first-train-input").val("");
    $("#frequency-input").val("");
  
  });
  
  database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
  
    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var trainStart = childSnapshot.val().trainStart;
    var frequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(destination);
    console.log(trainStart);
    console.log(frequency);
  



  
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(frequency),
      $("<td>").text(nextArrival),
      $("<td>").text(minutesAway)
    );
  

    $("#train-table > tbody").append(newRow);
  });

  
  // need to do moment.js will do with tutor 