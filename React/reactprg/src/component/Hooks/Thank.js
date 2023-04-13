import React from "react";
import heart from './heart.jpg'


 export function Thank(){
    return(
        <>
        <div className="pink d-flex justify-content-center pt-5">
            <div className="bg-white div_bg text-center rounded-5">
                <img src={heart} alt=""/>
                <h3 className="mt-2">Thank You!</h3>
                <p className="mt-4">I will follow your feedback to improve my performence</p>
            </div>
        </div>
        </>
    )
 }