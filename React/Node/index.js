const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const database = require('mysql');


const add = express();
add.use(cors());
add.use(bodyparser.json());
add.use(express.json());
add.use(express.static('public'));

let a = database.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Chinnusiva33",
        database:"crud"
    }
)

a.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("DB connected")
    }
});



add.get('/details',(request, response) =>{
    let sql = 'Select * from users';
    a.query(sql, (error, result) =>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

add.post('/addUser',(request,response) =>{
    
})

add.listen(1332, () =>{
    console.log("Server runing in 1332 port")
})
