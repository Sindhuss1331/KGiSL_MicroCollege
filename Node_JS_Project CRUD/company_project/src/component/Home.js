import React, { useEffect, useState } from "react";
import './Home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import axios from 'axios';

export function Home(){
    const [custdetails,setCustdetails] = useState([])
    useEffect(() =>{
        fetch("http://localhost:1970/costDetails")
        .then(response => response.json())
        .then(result => setCustdetails(result));
    });

    const snodelete= (sno) => {
        axios.post("http://localhost:1970/snodelete", { sno })
        .then((response) => {
            if(response.data.status === 'error')
            {
                alert("error");
                window.location.reload();
            }
            else if(response.data.status === 'success')
            {
                alert("Success");
                window.location.reload();
            }
        })

    }


    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex justify-content-between py-2">
                        <div>
                            <h1>Customer Details</h1>
                        </div>
                        <div>
                            <Link to='/AddCustomer'><button type="button" className="btn btn-secondary">Add Customer</button></Link>
                        </div>             
                    </div>
                </div>
            </div>
            <div>
                <table className="tabborder cen">
                    <thead>
                        <tr className="tabborder">
                            <th className="tabborder">Sno</th>
                            <th className="tabborder">Name</th>
                            <th className="tabborder">Address</th>
                            <th className="tabborder">City</th>
                            <th className="tabborder">Pincode</th>
                            <th className="tabborder">country</th>
                            <th className="tabborder" >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            custdetails.map((value,index) =>(
                                <tr>
                                    <td className="tabborder">{index + 1}</td>
                                    <td className="tabborder">{value.name}</td>
                                    <td className="tabborder">{value.address}</td>
                                    <td className="tabborder">{value.city}</td>
                                    <td className="tabborder">{value.pincode}</td>
                                    <td className="tabborder">{value.country}</td>
                                    <td className="tabborder">
                                        <Link to={"/Show/" + value.sno}><FontAwesomeIcon icon={faEye} className="btn"/></Link>
                                        <Link to={"/Edit/" + value.sno}><FontAwesomeIcon icon={faPen} className="btn"/></Link>
                                        <FontAwesomeIcon icon={faTrashCan} className="btn" onClick={() => {snodelete(value.sno)}}/>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}