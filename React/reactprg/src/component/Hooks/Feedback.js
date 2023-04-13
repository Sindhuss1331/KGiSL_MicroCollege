import React from "react";
import './feed.css';
import sad from './sad_png.png';
import none from './emoticon-1634515__340.webp';
import happy from './happy.jpg'
import {Link} from "react-router-dom";
export function Feedback(){
    return(
        <>
        <div className="pink d-flex justify-content-center pt-5">
            <div className="bg-white div_bg text-center rounded-5">
                <h3 className="mt-5">How statisfied are you my React moodle task?</h3>
                <div className="justify-content-center mt-5">
                    <div className="container-fluid row">
                        <div className=" col-4 col-lg-4">
                        <Link to='/Thank'><img src={sad} alt="" className="img"/></Link>
                            <p>Sad</p>
                        </div>
                        <div className="col-4 col-lg-4">
                        <Link to='/Thank'><img src={none} alt="" className="img"/></Link>
                            <p>None</p>   
                        </div>
                        <div className="col-4 col-lg-4">
                        <Link to='/Thank'><img src={happy} alt="" className="img"/></Link>
                            <p>Happy</p>
                        </div> 
                    </div>
                    
                        
                </div>
            </div>
        </div>
        </>
    )
}