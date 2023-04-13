import React from "react";
import './Login.css'
import lap from './lap.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faLock } from "@fortawesome/free-solid-svg-icons";


export function Login(){
    return(
        <>
        <div className="bdyin">
        <div className="col-1 col-lg-12 d-flex justify-content-around pt-5 int">
        <div className="col-lg-8 row  bg-white rounded-5">
            <div className="col-lg-6 text-center mt-5 bg-light">
                <div><img src={lap} alt="" className="rounded-circle"/></div>
            </div>
            <div className="col-lg-6 container-fluid ps-5">
            <h1 className="text-center mt-5">Member Login</h1>
                        <div className="bg-light rounded-5 div"><FontAwesomeIcon icon={faEnvelope}/>&nbsp;<input type="text" placeholder="E-mail" className="border-0 bg-transparent text"  /></div>
                        <div className="bg-light rounded-5 mt-3 div"><FontAwesomeIcon icon={faLock}/>&nbsp;<input type="Password" placeholder="Password" className="border-0  bg-transparent text"  /></div>
                        <input type='button' value="LOGIN"className="bg-success rounded-5 mt-3 text"/>
                       <p className="text-center mt-4">Forgot <span className="text-success">user name / Password  ? </span></p>
                       <p className="text-success text-center">Create your account =</p>
            </div>
        </div>
        </div>
       
        </div>
        
        </>
        
    )
}
