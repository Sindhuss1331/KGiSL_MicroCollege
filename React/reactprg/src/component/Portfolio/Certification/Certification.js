import React from "react";
import './Certification.css';
import javaPic from './basic_Java_programming_page-0001.jpg';
import frontEnd from './Front-end-development_page-0001.jpg';
import html from './Coursera html certificate_page-0001.jpg';
// import css from './CSS -certificate_page-0001.jpg';

export function Certification(){
    return(
        <>
            <div>
                <h2 className="pt-3 ps-2 fs-1 abtstyle">Certification</h2>
            </div>
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={javaPic} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={frontEnd} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={html} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </>
    );
}