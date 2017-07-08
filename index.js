function currentTime() {
    var time = new Date();
    var h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds();

    if(h<=9) {
        h = '0' + h;
    }
    if(m<=9) {
        m = '0' + m;
    }
    if(s<=9) {
        s = '0' + s;
    }
   time = h + ":" + m;
    document.getElementById('hoursMin').innerHTML=time;
    document.getElementById('seconds').innerHTML = ':' + s;
    setInterval('currentTime()', 1000);
}

currentTime();

setInterval(function () {
    currentTime();
}, 1000);

function toggleTime() {
    var obj = document.getElementById('seconds');

    if (obj.style.display != "inline") {
        obj.style.display = "inline";
    } else {
        obj.style.display = "none";
    }
}

var click = document.getElementById('watch');
click.addEventListener('click', toggleTime);

function sum(x) {
    return function(y) {
       return x+y;
    };
}
var sum1 = sum(1);
// console.log(sum1(5));



