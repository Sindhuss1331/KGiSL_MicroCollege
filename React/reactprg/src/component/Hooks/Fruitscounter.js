import {React,useState} from "react";
import mango from './mango.jpg';
import ban from './ban.jpg';
import './fruit.css';
export function Fruitscounter(){
    const [count1,setCount1]=useState(0);
    const [count2,setCount]=useState(0);
    return(
        <>
         <div className="bg-warning bbg">
            <div className="row pt-5">
                <div className="col-1"></div>
                <div className="col-10 bg-light">
                    <h1 className="mt-5 text-center">Bob ate <span className="text-warning">{count1}</span> mangos <span className="text-warning">{count2}</span> bananas</h1>
                    <div className="container-fluid row ">
                        <div className="col-lg-6 text-center mt-5">
                            <img src={mango} alt="" className="container-fluid mango"/>
                            <input type="button" value="Increment" className="btn btn-primary mt-5 mb-5" onClick={()=>setCount1(count1+1)}/>

                        </div>
                        <div className="col-lg-6 text-center mt-5">
                            <img src={ban} alt="" className="container-fluid mango"/><br/>
                            <input type="button" value="Increment" className="btn btn-primary mt-5 mb-5" onClick={()=>setCount(count2+1)}/>
                            
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div> 
    
                    
            
        </>
    )
}