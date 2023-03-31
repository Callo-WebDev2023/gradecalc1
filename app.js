function getres(){
    var a =parseInt(document.getElementById('InformationManagement').value);
    var b =parseInt(document.getElementById('Networking1').value);
    var c =parseInt(document.getElementById('WebSystems').value);
    var d =parseInt(document.getElementById('SIA').value);
    var e =parseInt(document.getElementById('Ethics').value);
    var f =parseInt(document.getElementById('Rizal').value);
    var g =parseInt(document.getElementById('PE2').value);
    if(a>100 || b > 100 || c > 100 || d > 100|| e > 100||  f > 100 || g > 100){
        alert('Does Not Exist');
    }
    else{
        var obtained = a+b+c+d+e+f+g;
        document.getElementById('obt').innerHTML = obtained;
        var per = obtained/700 * 100;
        document.getElementById('per').innerHTML = per+'%';
        if(per <=100 && per >= 90){
            document.getElementById('grade').innerHTML = 'OUTSTANDING';
            document.getElementById('PF').innerHTML = 'PASSED';
        }
        else if(per<= 89 && per >= 85){
            document.getElementById('grade').innerHTML = 'VERY SATISFACTORY';
            document.getElementById('PF').innerHTML = 'PASSED';
        }
         else if(per<= 84 && per >=80 ){
            document.getElementById('grade').innerHTML = 'SATISFACTORY';
            document.getElementById('PF').innerHTML = 'PASSED';
        }
         else if(per<=79 && per >=75){
            document.getElementById('grade').innerHTML = 'FAIRLY SATISFACTORY';
            document.getElementById('PF').innerHTML = 'PASSED';
        }
         else if(per<=74 && per>=60){
            document.getElementById('grade').innerHTML = 'DID NOT MEET EXPECTATIONS';
            document.getElementById('PF').innerHTML = 'FAILED';
        }
         else {
            document.getElementById('grade').innerHTML = 'Does Not Exist';
        }
    }
}