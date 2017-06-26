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

    time = h + ":" + m + ":" +s;
    document.getElementById('watch').innerHTML=time;
    setTimeout('currentTime()', 1000);
}

function sum(x) {

    return function(y) {
       return x+y;
    };
}
var sum1 = sum(1);
console.log(sum1(5));



