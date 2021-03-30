$(document).ready(function(){
    document.getElementById('day').focus();
});

function startTimer() {
    var day = $("#day").val();
    var month = document.getElementById("months").value;
    var year = document.getElementById("year").value;
    var hour = $("#hour").val();
    var min = $("#min").val();
    var sec = 00;
    if (!validateDate(day,month)) {
        alert("Δεν δώσατε σωστή Ημερομηνία");
    }else {
        if (!validateTime(hour,min)){
            alert("Δεν δώσατε σωστή ώρα");
        }else{
            var time = hour + ":" + min + ":" + sec;
            var date = new Date(month + " " + day + ", " + year + " " + time);
            countdownStart(date);
        }
    }    
}

function validateDate(day,month){
    var monthNow = new Date().getMonth();
    if (month == "Feb" && (day > 28 || day <1)){
        return false;
    }else if (month == "Jan" || month == "Mar" || month == "May" || month == "Jul" || month == "Aug" || month == "Oct" || month == "Dec") {
        if (day < 1 || day >31) {
            return false;
        }
    }else if (month == "Apr" || month == "Jun" || month == "Sep" || month == "Nov") {
        if (day < 1 || day >30) {
            return false;
        }
    }
    return true;
}

function validateTime(hour,min ){
    if (hour < 0 || hour > 23 || min <0 || min > 60) {
        return false;
    }else{
        return true;
    }
}

function stopTimer(x) {
    location.reload();
}

function countdownStart(date) {
    document.getElementById("startTimer").setAttribute("onclick","stopTimer()");
    document.getElementById("startTimer").setAttribute("value","Σταμάτησε");
    document.getElementById("day").setAttribute("disabled","disabled");
    document.getElementById("months").setAttribute("disabled","disabled");
    document.getElementById("year").setAttribute("disabled","disabled");
    document.getElementById("hour").setAttribute("disabled","disabled");
    document.getElementById("min").setAttribute("disabled","disabled");
    clearInterval(x);
    var x = setInterval(function() {
        var now = new Date();
        var dif = date - now;
        console.log(dif);
        var years = Math.floor(dif / (1000 * 60 * 60 * 24) / 365);
        var days = Math.floor(dif / (1000 * 60 * 60 * 24));
        days = ("0" + days).slice(-2);
        var hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hours = ("0" + hours).slice(-2);
        var minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
        minutes = ("0" + minutes).slice(-2);
        var seconds = Math.floor((dif % (1000 * 60)) / 1000);
        seconds = ("0" + seconds).slice(-2);
        if (years == 0 && days == 0 && hours == 0 && minutes == 0) {
            document.getElementById("countdown").innerHTML = seconds;
        }else if (years == 0 && days == 0 && hours == 0) {
            document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
        }else if (years == 0 && days == 0) {
            document.getElementById("countdown").innerHTML = hours + ":" + minutes + ":" + seconds;
        }else if (years == 0) {
            document.getElementById("countdown").innerHTML = days + " Μέρες " + hours + ":" + minutes + ":" + seconds;
        }else {
            document.getElementById("countdown").innerHTML = years + " Χρόνια " +  days + " Μέρες " + hours + ":" + minutes + ":" + seconds;
        }
        if (dif < 0) {
            clearInterval(x);
            alert("Τέλος Χρόνου");
        }
    },1000);
}