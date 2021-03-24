var numbers = [];
var player_numbers = [];
var player_tzoker = 0; 
var tzoker;
var counter = 1;

$(document).ready(function() {
    footer();
    drawNumberTable();
    drawTzokerTable();
    genNumbers();
});

function drawNumberTable(){
    let num = 1;
    for(let i=1;i<=9;i++) {
        html = '<tr>';
        $("#numbers").append(html);
        for(let j=1;j<=5;j++) {
            if (num < 10) {
                html = '<td><input type = "button" class="btn btn-primary col-md-5" id = ' + num + ' onclick="chooseNumber(this.id)" value = 0' + num + '></td>';
            }else{
                html = '<td><input type = "button" class="btn btn-primary col-md-5" id = ' + num + ' onclick="chooseNumber(this.id)" value =' + num + '></td>';
            }
            $("#numbers").append(html);
            num++;
        }
        html = '</tr>';
        $("#numbers").append(html);
    }
}

function drawTzokerTable(){
    let num = 1;
    for(let i=1;i<=5;i++) {
        html = '<tr>';
        $("#tzoker").append(html);
        for(let j=1;j<=4;j++) {
            if (num < 10) {
                html = '<td><input type = "button" class="btn btn-primary col-md-5" id = ' + num + ' onclick="choosetzoker(this.id)" value = 0' + num + '></td>';
            }else{
                html = '<td><input type = "button" class="btn btn-primary col-md-5" id = ' + num + ' onclick="choosetzoker(this.id)" value =' + num + '></td>';
            }
            $("#tzoker").append(html);
            num++;
        }
        html = '</tr>';
        $("#tzoker").append(html);
    }
}

function footer() {
    var d = new Date();
    document.getElementById("footer").innerHTML = "© " + d.getFullYear() + " Created by Nikolaos Psaltakis";
}

function chooseNumber(container){
    if (counter <=5) {
        document.getElementById(container).setAttribute("disabled", "disabled");
        console.log(container);
        counter++;
        player_numbers.push(container);
    }else{
        alert("Επέλεξες όλα τα νουμερα");
    }
}

function choosetzoker(container){
    if (player_tzoker == 0) {
        document.getElementById(container).setAttribute("disabled", "disabled");
        counter++;
        player_tzoker = container;
    }else{
        alert("Επέλεξες όλα τα νουμερα");
    }
}

function genNumbers(){
    for (let i = 1; i<6; i++) {
        do{
            temp = Math.floor(Math.random() * 45) + 1;
        }while (numbers.includes(temp));
        numbers.push(temp);
    }
    numbers.sort(function(a, b){return a - b});
    tzoker = Math.floor(Math.random() * 20) + 1;
}

function about() {
    $info1 = "TZOKER SIMULATOR.\n";
    $info2 = "The user choose 5 numbers betwwen 1 and 45 \nand 1 number between 1 and 20.\nThis is created for education proposes \n";
    $info3 = "Programmer : Nikolaos Psaltakis";
    alert($info1 + $info2 + $info3);
}

function game() {
    console.log(player_numbers);
    console.log(numbers);
    if (player_numbers.length == 5 && player_tzoker !=0){
        var message = checkifwin();
        console.log(message);
        document.getElementById("message").innerHTML = numbers + " - " + message;
    }else{
        alert("Δεν επέλεξες 5 αριθμούς");
    }
}

function checkifwin() {
    var count = 0;
    var message;
    for (let i=0;i<5;i++) {
        var check = parseInt(player_numbers[i])
        if(numbers.includes(check)){
            count++;
        }
    }
    if (tzoker == player_tzoker) {
        message = "Βρήκες " + count + " +1";
    }else{
        message = "Βρήκες " + count;
        return message;
    }
}