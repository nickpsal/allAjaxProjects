$(document).ready(function() {
    showTime();
});

function showTime() {
    clearInterval(x);
    var x = setInterval(function() {
        var now = new Date().getTime();
        var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hours = ("0" + hours).slice(-2);
        var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
        minutes = ("0" + minutes).slice(-2);
        var seconds = Math.floor((now % (1000 * 60)) / 1000);
        seconds = ("0" + seconds).slice(-2);
        document.getElementById("countdown").innerHTML = hours + ":" + minutes + ":" + seconds;
    },1000);
}