import React, { useState } from "react";
export function DateComponent(){
    const[final,setFinal]= useState("")
    function calculate(){
        var date=document.getElementById("join").value;
        alert(date)
        var enddate = new Date(date);
        alert(enddate)
        enddate.setDate(enddate.getDate()+90) 
        var output=enddate.getDate()+"/"+(enddate.getMonth()+1)+"/"+ enddate.getFullYear()
        alert(output)
        setFinal(output)
    }
    return(
        <>
            <label><h4>Enter your the joining date :</h4></label><input type="date" id="join" className="mt-5"/>
            <input type="button" value="Submit" className="" onClick={calculate}/><br/>
            <label><h4>Course Complition date :</h4></label><h1 className="mt-5">{ final}</h1>
        </>
    );
}

