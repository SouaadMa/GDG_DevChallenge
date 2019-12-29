
// Set the date we're counting down to
var countDownDate = new Date("Jan 01, 2020 00:00:00").getTime();

document.getElementById("body").style.transition = "2s opacity";

function pad2(number) {

     return (number < 10 ? '0' : '') + number
}

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  var y;
  if(distance >= 0) {
    //Show the countdown
    y=document.getElementsByClassName("Countdown");
    for(j=0; j<y.length; j++)
    {
      y[j].style.display = "block";
    }
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  // Display the result
  document.getElementById("num_d").innerHTML = pad2(days);
  document.getElementById("num_h").innerHTML = pad2(hours);
  document.getElementById("num_m").innerHTML = pad2(minutes);
  document.getElementById("num_s").innerHTML = pad2(seconds);
  }

  // If the count down is finished
  if (distance < 0) {
    clearInterval(x);
    var slideIndex = 0;
    //Hide the countdown
    y=document.getElementsByClassName("Countdown");
    document.getElementById("body").style.background = "url(gif6.gif)";
    for(j=0; j<y.length; j++)
    {
      y[j].style.display = "none";
    }
    var i;
    //Show the album and HAPPY NEW YEAR
    var x = document.getElementsByClassName("Slideshow");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
     }
     x = document.getElementsByClassName("Text");
     for (i = 0; i < x.length; i++) {
     x[i].style.display = "block";
      }
  }
}, 1000);
