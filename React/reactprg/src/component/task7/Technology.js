import React from "react";
import data from './data.jpg';
import iot from './iot.jpg';
import vr from './vr.jpg';
import ML from './ML.jpg';
export function Technology(){
    return(
        <>
            <div className="container-fluid row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 text-center bg-primary border">
                    <h1>Learn 4.0 Technologies</h1>
                    <p>Get by alumini of IIts and top compaies like Amazon,Microsoft,Intel,Novidia,Qualcomm,etc.Learn directly from involved in Product Development. </p>
                    <div className="row">
                        <div className="col-lg-5 bg-light ms-5 mt-4 rounded-3 border-top border-5 border-danger">
                            <h4>Data Scientist</h4>
                            <p>Data scientists are a new breed of analytical data expert who have skills to solve complex problems</p>
                            <div className="ms-5"><img src={data} alt="" className=""/></div>
                        </div>
                        <div className="col-lg-5 bg-light ms-5 mt-4 rounded-3 border-top border-5 border-info">
                            <h4>IOT Developer</h4>
                            <p>professionals who can develop, manage, and monitor IoT devices and systems, and research</p>
                            <div className="ms-5"><img src={iot} alt=""/></div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 bg-light ms-5 mt-4 rounded-3 border-top border-5 border-info">
                            <h4>VR Developer</h4>
                            <p>VR developer creates whole new digital settings that users can see through, but an AR apps to create</p>
                            <div className="ms-5"><img src={vr} alt=""/></div>
                        </div>
                        <div className="col-lg-5 bg-light ms-5 mt-4 rounded-3 border-top border-5 border-warning">
                            <h4>ML Engineer</h4>
                            <p>a person in IT who focuses on researching, building and designing self-running artificial intelligence</p>
                            <div className="ms-5"><img src={ML} alt=""/></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">

                </div> 

                
            </div>
            
        </>
    )
}