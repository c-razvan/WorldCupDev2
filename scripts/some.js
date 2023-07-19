            // Set the date we're counting down to
            var countDownDate = new Date("oct 11, 2023 00:00:00").getTime();
            
            // Update the count down every 1 second
            var x = setInterval(function() {
            
              // Get today's date and time
              var now = new Date().getTime();
            
              // Find the distance between now and the count down date
              var distance = countDownDate - now;
            
              // Time calculations for days, hours, minutes and seconds
              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
              // Display the result in the element with id="demo"
              document.getElementById("zile").innerHTML = days
              document.getElementById("ore").innerHTML = hours
              document.getElementById("minute").innerHTML = minutes
              document.getElementById("secunde").innerHTML = seconds
            
              // If the count down is finished, write some text

              if (distance < 0) {
                clearInterval(x);
                document.getElementById("not-started").style.display = "none";
                document.getElementById("started-live-main").style.display = "flex";
              }
            }, 1000);

            