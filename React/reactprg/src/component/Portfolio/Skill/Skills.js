import React from "react";
import './Skills.css';
import html from './html.png';
import css from './css.png';
import java from './java.png';
import js from './js.png';
import mysql from './mysql.png';
import react from "./react.png";
import node from './node.png';
import spring from './spring.png';


export function Skills(){
    
    return(
        <>
            <div className="container-fluid bcolor">
                <h1 className="ms-5 abtstyle">Skills</h1><br/>
                <div className="row skill text-center rounded">
                        <div className="col-lg-3">
                           <img src={html} alt="nopic" className="col-8 roundimg"/>
                        </div>
                        <div className="col-lg-3">
                            <img src={css} alt="nopic" className="col-8 roundimg"/>
                        </div>
                        <div className="col-lg-3">
                            <img src={java} alt="nopic" className="col-8 roundimg"/>
                        </div>
                        <div className="col-lg-3">
                            <img src={js} alt="nopic" className="col-8 roundimg"/>
                        </div>
                        <div className="col-lg-3">
                            <img src={mysql} alt="nopic" className="col-8 roundimg"/>
                        </div>
                        <div className="col-lg-3">
                            <img src={react} alt="nopic" className="col-8 roundimg"/>
                        </div>
                        <div className="col-lg-3">
                            <img src={node} alt="nopic" className="col-8 roundimg"/>
                        </div>
                        <div className="col-lg-3">
                            <img src={spring} alt="nopic" className="col-8 roundimg mt-3"/>
                        </div>
                       
                </div>

            </div>
        </>
    )
}