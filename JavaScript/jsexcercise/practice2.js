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
    }
    else{
        var result="Fail";
    }
    if(average>=80 && average<=100)
    {
        var grade="Distinction";
        
    }
    else if(average>=60 && average<=80)
    {
        var grade="First Class";
        
    }
    else if(average>=40 && average<=60)
    {
        var grade="Second Class";
    }
    else if(average>=10 && average<=40)
    {
        var grade="Third Class";
        // document.getElementById("gd").innerHTML=grade;
    }
    else
    {
        var grade="Fail";
        // document.getElementById("gd").innerHTML=grade
    }
     var row=mytable.insertRow(1);
     var cell1=row.insertCell(0);
     var cell2=row.insertCell(1);
     var cell3=row.insertCell(2);
     var cell4=row.insertCell(3);
     var cell5=row.insertCell(4);
     var cell6=row.insertCell(5);
     var cell7=row.insertCell(6);
     var cell8=row.insertCell(7);
     var cell9=row.insertCell(8);
     var cell10=row.insertCell(9);
     var cell11=row.insertCell(10);
     

     cell1.innerHTML=name;
     cell2.innerHTML=rollno;
     cell3.innerHTML=m1;
     cell4.innerHTML=m2;
     cell5.innerHTML=m3;
     cell6.innerHTML=m4;
     cell7.innerHTML=m5;
     cell8.innerHTML=total;
     cell9.innerHTML=average;
     cell10.innerHTML=result;
     cell11.innerHTML=grade;

    // document.getElementById("name").innerHTML =name;
    // document.getElementById("no").innerHTML =rollno;
    // document.getElementById("m11").innerHTML =m1;
    // document.getElementById("m22").innerHTML =m2;
    // document.getElementById("m33").innerHTML =m3;
    // document.getElementById("m44").innerHTML =m4;
    // document.getElementById("m55").innerHTML =m5;
    // document.getElementById("tol").innerHTML =total;
    // document.getElementById("avg").innerHTML =average;
}