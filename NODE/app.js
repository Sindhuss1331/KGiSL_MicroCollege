const express=require('express');
const cors=require('cors');
const fileupload=require('express-fileupload');
const bodyparser=require('body-parser');
const database=require('mysql');


const add=express();
add.use(cors());
add.use(fileupload());
add.use(bodyparser.json());
add.use(express.json());
add.use(express.static('public'));

let a =database.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Chinnusiva33",
        database:"userdetails"
    }
)

a.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("DB Connection");
    }
})
add.listen(8000,()=>
{
    console.log("Server running in 8000 port");
})
add.get('/userdetails',(request,response)=>{
    a.query('select * from userlist',
    (error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})
