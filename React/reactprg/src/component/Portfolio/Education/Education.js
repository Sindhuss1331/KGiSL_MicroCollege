import React from "react";
import './Education.css';
import edupic from './education-removebg-preview.png';
export function Education(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 text-center py-5">
                <h1 className="styleedu">Education</h1> 
                    <img src={edupic} alt="nopic" className="col-lg-8 imag rounded-circle"/>
                </div>
                <div className="col-lg-6 mt-5">
                    <div className="edu col-lg-12 p-2 m-2">
                        <h4 className="yearstyle text-white">2023</h4>
                        <h5 className="clgstyle">Masters of Computer Science</h5><p className="stypara">Pioneer College of Arts and Science, Coimbatore</p>          
                    </div>
                    <div className="bg-light col-lg-12 p-2 m-2">
                        <h4 className="yearstyle">2021</h4>
                        <h5 className="clgstyle">Batchelors of Computer Science</h5><p className="stypara">Govt Arts and Science, Sathyamangalam</p>
                    </div>
                    <div className="edu col-lg-12 p-2 m-2">
                        <h4 className="yearstyle text-white">2018</h4>
                        <h5 className="clgstyle">HSC</h5><p className="stypara">GTR Hr Sec School, Hasanur</p>
                    </div>
                    <div className="bg-light col-lg-12 p-2 m-2">
                        <h4 className="yearstyle">2016</h4>
                        <h5 className="clgstyle">SSLC </h5><p className="stypara">GTR Hr Sec School, Hasanu</p>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}