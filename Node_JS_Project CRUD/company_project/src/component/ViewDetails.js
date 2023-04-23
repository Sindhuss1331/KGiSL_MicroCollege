import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ViewDetails(){

    const {sno} = useParams();
    const [ id,setId ] =useState(0);
    const [ name,setName ] =useState('');
    const [ address,setAddres ] =useState('');
    const [ city,setCity ] =useState('');
    const [ pincode,setPincode] =useState(0);
    const [ country,setCountry ] =useState('');

    useEffect(() => {
        fetch("http://localhost:1970/viewDetails/" + sno)
        .then((response) => response.json())
        .then((result) => {
            setId(result[0].sno);
            setName(result[0].name);
            setAddres(result[0].address);
            setCity(result[0].city);
            setPincode(result[0].pincode);
            setCountry(result[0].country);
        })
    });
    


    return(
        <>
            <div>
                <table>
                    <tr>
                        <th>Sno :</th>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <th>Name :</th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th>Address :</th>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <th>City :</th>
                        <td>{city}</td>
                    </tr>
                    <tr>
                        <th>Pincode :</th>
                        <td>{pincode}</td>
                    </tr>
                    <tr>
                        <th>Country :</th>
                        <td>{country}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}