const express = require('express');
const cors = require('cors');
const bodyporser = require('body-parser');
const mysql = require('mysql');

const add = express();
add.use(cors());
add.use(bodyporser.json());
add.use(express.json());
add.use(express.static('public'));

let conn = mysql.createConnection(
    {
        host :"localhost",
        user :"root",
        password :"Chinnusiva33",
        database :"crud"
    }
);

conn.connect((error) =>{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("Database connected")
    }
});

add.get("/costDetails",(request,response) =>{
    let sql = 'select * from customer_details';
    conn.query(sql,(error,result) =>{
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(result);
        }
    })

});


add.post("/insert",(request,response) =>{
    let {name,address,city,pincode,country} =request.body;

    let sql ='insert into customer_details(name,address,city,pincode,country) values(?,?,?,?,?)';

    conn.query(sql,[name,address,city,pincode,country],(error,result) =>{
        if(error)
        {
            let status ={
                
                "status" : "error"
            }
            response.send(status);
        }
        else{
            let status ={
                "status" : "success"
            }
            response.send(status);
        }
    })
})

add.get("/viewDetails/:sno",(request,response) =>{

    let sno =request.params.sno;

    let sql = 'select * from customer_details where sno = ?';
    
    conn.query(sql,[sno],(error,result) => {
        if(error)
        {
            response.send(error);
            console.log(error);
        }
        else
        {
            response.send(result);
        }
    })
});

add.post("/snodelete",(request,response) => {
    let sno = request.body.sno;

    let sql = 'delete from customer_details where sno = ?';
    
    conn.query(sql,[sno],(error,result) => {
        if(error)
        {
            let status ={
                "status" : "error"
            }
            response.send(status);
        }
        else
        {
            let status = {
                "status" : "success"
            }
            response.send(status);
        }
    })

})


add.get("/updateDetails/:sno",(request,response) => {

    let sno =request.params.sno;

    let sql = 'select * from customer_details where sno = ?';

    conn.query(sql,[sno],(error,result) => {
        if(error)
        {
            response.send(error);
            console.log(error);
        }
        else
        {
            response.send(result);
        }
    })
});

add.put("/update/:sno",(request,response) => {
    let {name,address,city,pincode,country} =request.body;

    let sno = request.params.sno;
    let sql = 'update customer_details set name= ?,address=?,city=?,pincode=?,country=? where sno = ?';

    conn.query(sql,[name,address,city,pincode,country,sno],(error,result) => {
        if(error)
        {
            let status = {
                "status" : "Error"
            }
            response.send(status);
            console.log(error);
        }
        else
        {
            let status={
                "status" : "Success"
            }
            response.send(status);
        }
        
    })

},[]);

let port = 1970;

add.listen(port, () =>{
    console.log(`port number :${port}`);
})