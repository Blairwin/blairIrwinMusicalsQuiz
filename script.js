$(document).ready(function() {
  // your code here


//   $("button").on("click", function () {
// //     doStuff();


// const change = document.getElementById('.question')



  
});


// $(function() {
//   function doStuff() {
//     let chosenCity = document.getElementById("city").value;
//     let coordinates = "";
//     if (chosenCity == "toronto") {
//       coordinates = "43.6532,-79.3832";
//     } else if (chosenCity == "orlando") {
//       coordinates = "28.5383,-81.3792";
//     } else {
//       coordinates = "-90.0000,45.0000";
//       chosenCity = "south pole";
//     }

//     $.ajax({
//       url: `https://api.darksky.net/forecast/ded4f85464a017069a3dc83fb0be3e38/${coordinates}`,
//       method: "GET",
//       dataType: "jsonp"
//     }).then(function(data) {
//       console.log(data);

//       function fontAwesomeFromDarkSky(dsIcon) {
//         if (dsIcon == "clear-day") {
//           return "fas fa-sun";
//         } else if (dsIcon == "clear-night") {
//           return "far fa-moon";
//         } else if (dsIcon == "rain") {
//           return "fas fa-cloud-rain";
//         } else if (dsIcon == "snow") {
//           return "fas fa-snowflake";
//         } else if (dsIcon == "sleet") {
//           return "fas fa-stroopwafel";
//         } else if (dsIcon == "wind") {
//           return "fas fa-wind";
//         } else if (dsIcon == "fog") {
//           return "fas fa-smog";
//         } else if (dsIcon == "cloudy") {
//           return "fas fa-cloud";
//         } else if (dsIcon == "partly-cloudy-day") {
//           return "fas fa-cloud-sun";
//         } else if (dsIcon == "partly-cloudy-night") {
//           return "fas fa-cloud-moon";
//         } else if (dsIcon == "thunderstorm") {
//           return "fas fa-bolt";
//         } else {
//           return "fas fa-meteor";
//         }
//       }

//       function photos(temp) {
//         if (temp >= 25) {
//           return "./DogJogPhotos/SunnyGrass.jpeg";
//         } else if (temp > 20 && temp < 25) {
//           return "./DogJogPhotos/sunnyNoJacket.jpeg";
//         } else if (temp > 18 && temp <= 20) {
//           return "./DogJogPhotos/Leaves2.jpg";
//         } else if (temp > 16 && temp <= 18) {
//           return "./DogJogPhotos/tiredSweater.jpeg";
//         } else if (temp > 14 && temp <= 16) {
//           return "./DogJogPhotos/RedSweater.jpeg";
//         } else if (temp > 10 && temp <= 14) {
//           return "./DogJogPhotos/lightJacket.jpeg";
//         } else if (temp > 5 && temp <= 10) {
//           return "./DogJogPhotos/sweaterAndBlanket.jpeg";
//         } else if (temp > 0 && temp <= 5) {
//           return "./DogJogPhotos/Boots.jpeg";
//         } else if (temp > -5 && temp <= 0) {
//           return "./DogJogPhotos/ridiculousBootsAndSweater.jpeg";
//         } else if (temp > -8 && temp <= -5) {
//           return "./DogJogPhotos/blanket.jpg";
//         } else if (temp > -10 && temp <= -8) {
//           return "./DogJogPhotos/IceStorm.jpg";
//         } else if (temp > -12 && temp <= -10) {
//           return "./DogJogPhotos/parka.jpeg";
//         } else if (temp > -15 && temp <= -12) {
//           return "./DogJogPhotos/StretchedOutInBed.jpg";
//         } else if (temp > -20 && temp <= -15) {
//           return "./DogJogPhotos/stayInBed.jpeg";
//         } else {
//           return "./DogJogPhotos/SleepingByTheFire.jpeg";
//         }
//       }

//       if (chosenCity == "south pole") {
//         $("#outcome").text("What are you thinking?!?!!?!");
//         $("#comments").text(
//           "Stay inside. Too cold to even consider going outside. Why do you have a dog in the South Pole?"
//         );
//       } else {
//         $("#outcome").text(data.currently.summary);
//         $("#comments").text(data.minutely.summary);
//       }

//       $("#resultPic").attr("src", photos(fToC(data.currently.temperature)));
//       $("#awesome").attr("class", fontAwesomeFromDarkSky(data.currently.icon));
//       $("#high").text(fToC(data.currently.temperature));
//       $("#low").text(fToC(data.currently.apparentTemperature));

//       function fToC(fahrenheit) {
//         let celsius = ((fahrenheit - 32) * 5) / 9;
//         celsius = Math.round(celsius);
//         return celsius;
//       }
//     });
//   }

//   $("button").on("click", function() {
//     doStuff();
//   });
// });}