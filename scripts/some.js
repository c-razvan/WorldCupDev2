// Set the date we're counting down to
var countDownDate = new Date("oct 13, 2023 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  seconds < 10 ? (seconds = "0" + seconds) : null;
  minutes < 10 ? (minutes = "0" + minutes) : null;
  hours < 10 ? (hours = "0" + hours) : null;

  // Display the result in the element with id="demo"
  document.getElementById("zile").innerHTML = days;
  document.getElementById("ore").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("secunde").innerHTML = seconds;

  // If the count down is finished, write some text

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("not-started").style.display = "none";
    document.getElementById("started-live-main").style.display = "flex";
  }
}, 1000);
