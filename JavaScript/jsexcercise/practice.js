function clicked()
{
    //alert("clickme");
    var name=document.getElementById("std").value;
    var rollno=document.getElementById("sno").value;
    var m1=parseInt(document.getElementById("m1").value);
    var m2=parseInt(document.getElementById("m2").value);
    var m3=parseInt(document.getElementById("m3").value);
    var m4=parseInt(document.getElementById("m4").value);
    var m5=parseInt(document.getElementById("m5").value);
    var total=m1+m2+m3+m4+m5;
    var average=total/5;
    if(average>45)
    {
        var result="Pass";
      document.getElementById("res").innerHTML=result;
    }
    else{
        var result="Fail";
      document.getElementById("res").innerHTML=result;
    }
    if(average>=80 && average<=100)
    {
        var grade="Distinction";
        document.getElementById("gd").innerHTML=grade;
    }
    else if(average>=60 && average<=80)
    {
        var grade="First Class";
        document.getElementById("gd").innerHTML=grade;
    }
    else if(average>=40 && average<=60)
    {
        var grade="Second Class";
        document.getElementById("gd").innerHTML=grade;
    }
    else if(average>=10 && average<=40)
    {
        var grade="Third Class";
        document.getElementById("gd").innerHTML=grade;
    }
    else
    {
        var grade="Fail";
        document.getElementById("gd").innerHTML=grade;
    }
    document.getElementById("name").innerHTML =name;
    document.getElementById("no").innerHTML =rollno;
    document.getElementById("m11").innerHTML =m1;
    document.getElementById("m22").innerHTML =m2;
    document.getElementById("m33").innerHTML =m3;
    document.getElementById("m44").innerHTML =m4;
    document.getElementById("m55").innerHTML =m5;
    document.getElementById("tol").innerHTML =total;
    document.getElementById("avg").innerHTML =average;
}