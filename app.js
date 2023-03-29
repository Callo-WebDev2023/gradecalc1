function getres(){
    var a =parseInt(document.getElementById('math').value);
    var b =parseInt(document.getElementById('physics').value);
    var c =parseInt(document.getElementById('PE').value);
    var d =parseInt(document.getElementById('Computer Science').value);
    var e =parseInt(document.getElementById('Science').value);
    if(a>100 || b > 100 || c > 100 || d > 100|| e > 100){
        alert('Enter Correct Number');
    }
    else{
        var obtained = a+b+c+d+c+e;
        document.getElementById('obt').innerHTML = obtained;
        var per = obtained/500 * 100;
        document.getElementById('per').innerHTML = per+'%';
        if(per< 50){
            document.getElementById('grade').innerHTML = 'FAIL';
        }
        else if(per< 50 && per < 60){
            document.getElementById('grade').innerHTML = 'C';
        }
         else if(per< 60 && per < 70){
            document.getElementById('grade').innerHTML = 'B';
        }
         else if(per< 70 && per <100){
            document.getElementById('grade').innerHTML = 'A';
        }
         else if(per< 50){
            document.getElementById('grade').innerHTML = 'A';
        }
    }
}