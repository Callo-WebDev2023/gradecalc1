function getres(){
    var a =parseInt(document.getElementById('math').value);
    var b =parseInt(document.getElementById('physics').value);
    var c =parseInt(document.getElementById('PE').value);
    var d =parseInt(document.getElementById('Computer').value);
    var e =parseInt(document.getElementById('Science').value);
    if(a>100 || b > 100 || c > 100 || d > 100|| e > 100){
        alert('Enter Correct Number');
    }
    else{
        var obtained = a+b+c+d+e;
        document.getElementById('obt').innerHTML = obtained;
        var per = obtained/500 * 100;
        document.getElementById('per').innerHTML = per+'%';
        if(per <=100 && per >= 90){
            document.getElementById('grade').innerHTML = 'OUTSTANDING';
        }
        else if(per<= 89 && per >= 85){
            document.getElementById('grade').innerHTML = 'VERY SATISFACTORY';
        }
         else if(per<= 84 && per >=80 ){
            document.getElementById('grade').innerHTML = 'SATISFACTORY';
        }
         else if(per<=79 && per >=75){
            document.getElementById('grade').innerHTML = 'FAIRLY SATISFACTORY';
        }
         else if(per<=74 && per>=60){
            document.getElementById('grade').innerHTML = 'DID NOT MEET EXPECTATIONS';
        }
    }
}