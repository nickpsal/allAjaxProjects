var computer_num = Math.floor(Math.random()*200);
$(document).ready(function() {
    footer();
});

function about() {
    $message1 = "The computer generates a number betwwen 1 and 100.\n";
    $message2 = "The user tries to quess that number.\n";
    $message3 = "Programmer : Nikolaos Psaltakis";
    alert($message1 + $message2 + $message3);
}

function footer() {
    var d = new Date();
    document.getElementById("footer").innerHTML = "© " + d.getFullYear() + " Created by Nikolaos Psaltakis";
}

function play() {
    var counter = 0;
    var number = $("#number").val();
    if (number < computer_num) {
        document.getElementById("result").innerHTML = "Ο Αριθμός που διαλέξατε είναι μικρότερος απο του Υπολογιστή";
        counter++;
    }else if (number > computer_num) {
        document.getElementById("result").innerHTML = "Ο Αριθμός που διαλέξατε είναι μεγαλύτερος απο του Υπολογιστή";
        counter++;
    }else if (number == computer_num) {
        document.getElementById("result").innerHTML = "Τον βρήκατε!!!!!!! με " + counter + " Προσπάθειες";
    }   
}