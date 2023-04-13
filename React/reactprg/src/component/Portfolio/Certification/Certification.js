import React from "react";
import './Certification.css';
import javaPic from './basic_Java_programming_page-0001.jpg';
import frontEnd from './Front-end-development_page-0001.jpg';
import html from './Coursera html certificate_page-0001.jpg';
import css from './CSS -certificate_page-0001.jpg';

export function Certification(){
    return(
        <>
            <div>
                <h2 className="pt-3 ps-2 fs-1 abtstyle">Certification</h2>
            </div>
            <div className="container-fluid">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                    <img src={javaPic} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Basic_Java_programming</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={frontEnd} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Front-end-development</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={html} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">HTML_FullStack_Development</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={css} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">CSS_FullStack_Development</h5>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}