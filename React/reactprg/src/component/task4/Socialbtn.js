import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Socialbtn.css';
export function Socialbtn(){
    return(
        <div className="bdys">
            <div className="container">
                <h1 className="text-white siz">Social Buttons</h1>
                <input type="button" class="but bg-warning" value="Like"/>
                <input type="button" class="but bg-light" value="Comment"/>
                <input type="button" class="but bg-primary" value="Share"/>
            </div>
        <div>
                
            </div>
        </div>
        
    )
}