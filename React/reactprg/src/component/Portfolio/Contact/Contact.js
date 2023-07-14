import React from "react";
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelopeOpenText, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";



export function Contact(){
    return(
        <>
        <div className="bgcontact pt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 text-center getin">
                        <h1 className="getin text-black">Get in touch.</h1>
                    </div>
                    <div className="vertical ms-2 mt-2 d-none d-lg-block">
                        </div>
                    <div className="col-lg-4 mt-2 bgcontact">
                        <div className="color-white">
                            <h4 className="styleedding"><FontAwesomeIcon icon={faLocationDot} className="fs-4"/>&nbsp;&nbsp;Address</h4>
                            <span className="p-4 stylesub">Coimbatore</span><br/>
                            <span className="p-4 stylesub">Press Colony,Periyanayakkan Palayam</span>
                        </div><br/>
                        <div>
                            <h4 className="styleedding"><FontAwesomeIcon icon={faPhone} className="fs-4"/>&nbsp;&nbsp;Phone</h4>
                            <Link to='phoneto:9159344079' className="text-black "><p className="p-2 ms-3 stylesub">9361425821</p></Link>
                        </div>
                        <div>
                            <h3 className="styleedding"><FontAwesomeIcon icon={faEnvelopeOpenText} className="fs-4"/>&nbsp;&nbsp;Email</h3>
                            <Link to='mailto:sindhuss915@gmail.com' className="text-black "><p className="p-2 ms-3 stylesub">sindhuss915@gmail.com</p></Link>
                        </div>
                        <div>
                            <h3 className="styleedding"><FontAwesomeIcon icon={faThumbsUp} className="fs-4"/>&nbsp;&nbsp;Follow</h3>
                            <div className="ms-3">
                            <a href="https://www.linkedin.com/in/sindhu-sivakumar-sindhu-sivakumar/"><FontAwesomeIcon icon={faLinkedin} className="fs-3 border border-black p-2 rounded-circle bg-white rou"/></a>&nbsp;&nbsp;<a href="https://github.com/Sindhuss1331"><FontAwesomeIcon icon={faGithub} className="fs-3 border border-black p-2 rounded-circle bg-white rou"/></a>&nbsp;&nbsp;<a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="fs-3 border border-black p-2 rounded-circle bg-white rou"/></a>&nbsp;&nbsp;<Link to='mailto:sindhuss915@gmail.com'><FontAwesomeIcon icon={faEnvelope} className="fs-3 border border-black p-2 rounded-circle bg-white rou"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <lable className="lab">Name</lable><br/>
                        <input type="text" className="sizeinput"/><br/><br/>
                        <lable className="lab">Email</lable><br/>
                        <input type="text" className="sizeinput"/><br/><br/>
                        <lable className="lab">Your Message</lable><br/>
                        <textarea rows="5" cols="40" className="sizeinput bg-white"/><br/>
                        <input type="button" value="Send" className="btn btn-dark but"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}