import React from "react";
import './HomeIndustry.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import skill from './pngwing.com (4).png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons/faBell'
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export function HomeIndustry()
{
    return(
        <>
        <div className="bagimg">
            <div>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={skill} alt="nopic" height="50px" width="50px"/></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <button class="btn btn-outline-success ms-2" type="submit">Find Candidates</button>
                                </li>
                                <button class="btn btn-outline-success ms-2" type="submit">Find Jobs</button>
                                <li class="nav-item">
                                    <button class="btn btn-outline-success ms-2" type="submit">Find Companies</button>
                                </li>
                            </ul>
                            <FontAwesomeIcon icon={faBell} className="me-5"/>
                            <form class="d-flex">
                                <button class="btn btn-outline-success" type="submit">Login</button>
                                <button class="btn btn-outline-success ms-2" type="submit">Register</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="text-center m-3 p-4">
                <h1>Find the Candidates as per your requirements</h1><br/>
                <div className="border border-black bg-light text-center p-3 ">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="fs-4"/>&nbsp;&nbsp;
                    <input type="text" placeholder="Job Title / Keyword" className="search p-3 bg-light"/>
                    <span className="line"></span>
                    <FontAwesomeIcon icon={faLocationDot} className="fs-4"/>&nbsp;&nbsp;
                    <input type="text" placeholder="Add Country / City" className="search p-3 bg-light"/>
                </div>
            </div>
        </div>
        </>
    );
}