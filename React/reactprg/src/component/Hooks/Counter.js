import {React,useState} from "react";

export function Counter(){
    const [count,setCount]=useState(0);
    return(
        <>
        <div className="text-center mt-5">
            <h1>Counter Task</h1>
            <h1 className="mt-5">{count}</h1>
            <div className="mt-5">
                <input type="button" value="Increment" className="" onClick={()=>setCount(count+1)}/>&nbsp;&nbsp;
                <input type="button" value="Decrement" className="" onClick={()=>setCount(count-4)}/>&nbsp;&nbsp;
                <input type="button" value="Reset" className="" onClick={()=>setCount(count*0)}/>
            </div>
            
        </div>
                
        </>
    )
}