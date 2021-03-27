function generate(){
    var result = "";
    var length = 17;
    var choise = 0;
    var cap = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var num = ['0','1','2','3','4','5','6','7','8','9'];
    var symbols = ['!','@','#','$','%','^','&','*','(',')','-'];
    var r = Math.floor(Math.random()*100);
    if (r <= 25){
        for (let i=0;i<3;i++){
            choise = Math.floor(Math.random()*cap.length);
            result += cap[choise];
            cap.splice(choise,1);
        }
        choise = Math.floor(Math.random()*symbols.length);
        result += symbols[choise];
        symbols.splice(choise,1);
        for (let i=0;i<7;i++){
            choise = Math.floor(Math.random()*lower.length);
            result += lower[choise];
            lower.splice(choise,1);
        }
        for (let i=0;i<3;i++){
            choise = Math.floor(Math.random()*num.length);
            result += num[choise];
            num.splice(choise,1);
        }
        for (let i=0;i<2;i++){
            choise = Math.floor(Math.random()*symbols.length);
            result += symbols[choise];
            symbols.splice(choise,1);
        }
    }else if (r <=50) {
        for (let i=0;i<7;i++){
            choise = Math.floor(Math.random()*lower.length);
            result += lower[choise];
            lower.splice(choise,1);
        }
        choise = Math.floor(Math.random()*symbols.length);
        result += symbols[choise];
        symbols.splice(choise,1);
        for (let i=0;i<3;i++){
            choise = Math.floor(Math.random()*cap.length);
            result += cap[choise];
            cap.splice(choise,1);
        }
        for (let i=0;i<3;i++){
            choise = Math.floor(Math.random()*num.length);
            result += num[choise];
            num.splice(choise,1);
        }
        for (let i=0;i<2;i++){
            choise = Math.floor(Math.random()*symbols.length);
            result += symbols[choise];
            symbols.splice(choise,1);
        }
    }else{
        for (let i=0;i<3;i++){
            choise = Math.floor(Math.random()*num.length);
            result += num[choise];
            num.splice(choise,1);
        }
        for (let i=0;i<3;i++){
            choise = Math.floor(Math.random()*cap.length);
            result += cap[choise];
            cap.splice(choise,1);
        }
        choise = Math.floor(Math.random()*symbols.length);
        result += symbols[choise];
        symbols.splice(choise,1);
        for (let i=0;i<7;i++){
            choise = Math.floor(Math.random()*lower.length);
            result += lower[choise];
            lower.splice(choise,1);
        }
        for (let i=0;i<2;i++){
            choise = Math.floor(Math.random()*symbols.length);
            result += symbols[choise];
            symbols.splice(choise,1);
        }
    }
    console.log(cap);
    console.log(lower);
    console.log(num);
    console.log(symbols);
    document.getElementById("content").innerHTML = result;
}