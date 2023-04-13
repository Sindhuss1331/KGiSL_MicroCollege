import React from "react";
import './Homepage.css';
import mypic from './mypic.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function PortHome()
{
  return(
        <>
          <div className="home container-fluid ">
            <div className="row">
              <div className="col-12 col-lg-6 con">
                <h5 className="hii">Hi&nbsp;&nbsp;<FontAwesomeIcon icon={faHandPointRight}/></h5><br/>
                <h3 className="sin">I'm&nbsp;<span className="text-white namestyle">Sindhu</span></h3>
                <h6 className="cfd styleh3">Certified FullStack Developer</h6>
               
              </div>
            
              <div className="col-lg-6">
                <img src={mypic} alt="no pic" className="col-8 col-lg-5 rounded-circle pic"/>
              </div>
            </div>
          
            <div className="icons mb-4">
              <Link to='mailto:sindhuss915@gmail.com'><FontAwesomeIcon icon={faEnvelope} className="fs-3 rou"/></Link>
              <a href="https://github.com/Sindhuss1331"><FontAwesomeIcon icon={faGithub} className="fs-3 rou"/></a> 
              <a href="https://www.linkedin.com/in/sindhu-sivakumar-sindhu-sivakumar/"><FontAwesomeIcon icon={faLinkedin} className="fs-3 rou"/></a> 
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="fs-3 rou"/></a>
            </div>  
          </div>    
        </>
      );
}
export default PortHome;