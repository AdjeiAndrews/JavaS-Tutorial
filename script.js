var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var seconds = document.getElementById('seconds');

var clock = setInterval(
    function time() {
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();

        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;




    },1000
    
);