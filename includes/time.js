$(document).ready(function() {
    showTime();
});

function showTime() {
    clearInterval(x);
    var x = setInterval(function() {
        var now = new Date();
        var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((now % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = hours + ":" + minutes + ":" + seconds;
    },1000);
}