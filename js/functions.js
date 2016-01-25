
            //Updates element named "time" with the current time every 500ms
            function updateTime(){
                
                var today = new Date();
                var hour = today.getHours(); 
                var minute = formatTime(today.getMinutes()); 
                var second = formatTime(today.getSeconds());
                var milli = formatTime(today.getMilliseconds());
                
                //insert time into html
                document.getElementById("showHour").innerHTML = hour + ":";
                document.getElementById("showMinute").innerHTML = minute + ":";
                document.getElementById("showSecond").innerHTML = second;
                document.getElementById("showMilli").innerHTML = " " + milli;
                
                //loop
                var t = setTimeout(updateTime, 5); //runs every 500ms
                
            }
            
            //adds 0 if time less than 10, ex 1 becomes 01
            function formatTime(i) {
                
                if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
                return i;
                
            }