import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function UpdateDetails(){


    const {sno} = useParams();
    const [ id,setId ] =useState(0);
    const [ name,setName ] =useState('');
    const [ address,setAddres ] =useState('');
    const [ city,setCity ] =useState('');
    const [ pincode,setPincode] =useState(0);
    const [ country,setCountry ] =useState('');

    useEffect(() => {
        fetch("http://localhost:1970/updateDetails/" + sno)
        .then((response) => response.json())
        .then((result) => {
            setId(result[0].sno);
            setName(result[0].name);
            setAddres(result[0].address);
            setCity(result[0].city);
            setPincode(result[0].pincode);
            setCountry(result[0].country);
        })
        .catch((error) => {alert("API Error\n" + error)})
    },[]);

    function updatedetails()
    {
        let name = document.getElementById("name").value;
        let address = document.getElementById("address").value;
        let city = document.getElementById("city").value;
        let pincode = parseInt(document.getElementById("pincode").value);
        let country = document.getElementById("country").value;

        axios.put("http://localhost:1970/update/" + sno, {name,address,city,pincode,country})
        .then((response) => {
            if(response.data.status === 'Error')
            {
                alert("Error");
                window.location.href = '/';
            }
            else if(response.data.status === 'Success')
            {
                alert("success");
                window.location.href = '/';
            }
        },[])
    }

    return(
        <>
            <div>
                <form>
                    <table>
                        <tr>
                            <td><label>Sno</label></td>
                            <td><input type="text" name="sno" id="sno" value={id} disabled/></td>
                        </tr>
                        <tr>
                            <td><label>Name</label></td>
                            <td><input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><label>Address</label></td>
                            <td><input type="text" name="address" id="address" value={address} onChange={(e) => setAddres(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><label>City</label></td>
                            <td><input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><label>Pincode</label></td>
                            <td><input type="text" name="pincode" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><label>Country</label></td>
                            <td><input type="text" name="country" id="country" value={country} onChange={(e) => setCountry(e.target.value)}/></td>
                        </tr>
                        <input type="button" value="Update"  onClick={updatedetails}/>
                    </table>
                </form>
            </div>
        </>
    )
}