import React from "react";
import axios from 'axios';

export function AddCustomer(){
    async function addCostomer(){
        var name =document.getElementById("name").value;
        var address =document.getElementById("address").value;
        var city =document.getElementById("city").value;
        var pincode =parseInt(document.getElementById("pincode").value);
        var country =document.getElementById("country").value;

        await axios.post("http://localhost:1970/insert",{name,address,city,pincode,country})
        .then((res) => {
            if(res.data.status === 'error')
            {
                alert("error");
            }
            else if(res.data.status === 'success')
            {
                alert('success');
                window.location.href = '/';
            }
        })

    }
    return(
        <>
            <form>
                <table>
                    <tr>
                        <td><label>Name :</label></td>
                        <td><input type="text" name="name" id="name"/><br/></td>
                    </tr>
                    <tr>
                        <td><label>Address :</label></td>
                        <td><input type="text" name="address" id="address"/><br/></td>
                    </tr>
                    <tr>
                        <td><label>City :</label></td>
                        <td><input type="text" name="city" id="city"/><br/></td>
                    </tr>
                    <tr>
                        <td><label>Pincode :</label></td>
                        <td><input type="text" name="pincode" id="pincode"/><br/></td>
                    </tr>
                    <tr>
                        <td><label>Country :</label></td>
                        <td><input type="text" name="country" id="country"/><br/></td>
                    </tr>
                <input type="button" value="Add"  onClick={addCostomer}/>
                </table>
            </form>
        </>
    )
}