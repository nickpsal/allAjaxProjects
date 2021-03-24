$(document).ready(function() {
    var numbers = [];
    footer();
    calcNumbers(numbers);
    FillTable();
    showNumbers(numbers);
});

function footer() {
    var d = new Date();
    document.getElementById("footer").innerHTML = "© " + d.getFullYear() + " Created by Nikolaos Psaltakis";
}

function calcNumbers(numbers) {
    for (let i = 0; i<20; i++) {
        do{
            temp = Math.floor(Math.random() * 80) + 1;
        }while (numbers.includes(temp));
        numbers.push(temp);
    }
    numbers.sort(function(a, b){return a - b});
    console.log(numbers);
}

function FillTable() {
    var number = 01;
    for (let i = 1; i<=8;i++) {
        html = '<tr>';
        $("#numbers").append(html);
        for(let j = 1; j<=10;j++) {
            if (number < 10) {
                html = '<td id =' + number + '>' + 0 + number + '</td>';
            }else{
                html = '<td id =' + number + '>' + number + '</td>';
            }
            $("#numbers").append(html);
            number++;
        }
        html = '</tr>';
        $("#numbers").append(html);
    }
}

function showNumbers(numbers) {
    for (let i = 1; i<=80;i++) {
        if (numbers.includes(i)) {
            document.getElementById(i).setAttribute("class", "yellow");
        }
    }
}

function about() {
    $info1 = "KINO SIMULATOR.\n";
    $info2 = "Programmer : Nikolaos Psaltakis";
    alert($info1 + $info2);
}