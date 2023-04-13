import React,{ useEffect, useState } from "react";
import './Products.css'
export function Products(){
    const[details,setDetails]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/data.json')
        .then(data1=>data1.json())
        .then(data2=>setDetails(data2))
    })
    return(
        <>
        <div className="conatiner-fluid bg-danger">
            <h1 className="text-center text-white">Lap Models</h1>
            <div className="col-lg-12 row">
            {
                details.map((value,index)=>(
                    <>
                        <div class="card col-lg-3 my-2  product-card lap bg-light">
                            <img src={value.imageURL} class="card-img-top h-100 mt-3 imglap" alt="" />
                            <div class="card-body">
                                <h5 class="card-title name">Name: {value.Name}</h5>
                                <h6 class="card-subtitle mb-2">Brand: {value.brand}</h6>
                                <h6 class="card-subtitle mb-2">Price: {value.Price}</h6>
                                <h6 class="card-subtitle mb-2">Display: {value.Display}</h6>
                                <h6 class="card-subtitle mb-2">CPU: {value.CPU}</h6>
                                <h6 class="card-subtitle mb-2">GPU: {value.GPU}</h6>
                                <h6 class="card-subtitle mb-2">RAM: {value.RAM}</h6>
                            </div>
                        </div>
                        
                    </>
                ))
            }
            </div>
            </div>
        </>
    )
}