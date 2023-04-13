import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCircleCheck, faCircleXmark} from '@fortawesome/free-regular-svg-icons';


export function Notify(){
    return(
        <>
        <div className="container-fluid">
            <div className="col-10 col-lg-12 text-center mt-5"><h1>Notifications</h1></div>
            <div className="row">
                <div className="col-1 col-lg-4"></div>
                <div className="col-10 col-lg-4 pt-3 pb-1 fs-5  bg-info mt-5 msg">
                    <p><FontAwesomeIcon icon={faCircleCheck}/>&nbsp;Information Message</p>
                </div>
                <div className="col-1 col-lg-4"></div>
            </div>
            <div className="row">
                <div className="col-1 col-lg-4"></div>
                <div className="col-10 col-lg-4 pt-3 pb-1 fs-5  bg-success mt-5 msg">
                    <p><FontAwesomeIcon icon={faCircleCheck}/>&nbsp;Success Message</p>
                </div>
                <div className="col-1 col-lg-4"></div>
            </div>
            <div className="row">
                <div className="col-1 col-lg-4"></div>
                <div className="col-10 col-lg-4 pt-3 pb-1 fs-5  bg-warning mt-5 msg">
                    <p><FontAwesomeIcon icon={faBell}/>&nbsp;Warning Message</p>
                </div>
                <div className="col-1 col-lg-4"></div>
            </div>
            <div className="row">
                <div className="col-1 col-lg-4"></div>
                <div className="col-10 col-lg-4 pt-3 pb-1 fs-5  bg-danger mt-5 msg">
                    <p><FontAwesomeIcon icon={faCircleXmark}/>&nbsp;Error Message</p>
                </div>
                <div className="col-1 col-lg-4"></div>
            </div>
            
        </div>
        </>
        
    )
}