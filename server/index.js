const express =require('express');
const app = express();
const mysql =require('mysql');

const db =mysql.createPool({

    host:"localhost" ,
    user:"root",
    password :"password",
    database :"cbmis"

})



app.listen(4000, () => console.log(`Listening on port 4000`));

app.get('/',(req,res)=>{
    const sqlInsert = "INSERT INTO tblUser (strName,dtmDOB,strEmail,strPassword) VALUES ();"; 
    db.query(sqlInsert,(err,result)=>{
    res.send("Thank you for your request. The serverApp received the following information and soon will be able to save this data into the database:")
    })
})



