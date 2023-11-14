    const bodyParser = require('body-parser');
    const express=require('express');
    const app=express();
    const mysql=require('mysql');
    const cors=require('cors');

    const db=mysql.createConnection({
        user:"root",
        host:"localhost",
        password:"ademz1s",
        database:"phpproj",
    });
    // normalment el connection l serveur hakka fi star baad hedha, esm l db database phpproj hawka
    $conn=new mysqli()
    app.use(express.json());

    app.listen(3001,()=>{
        console.log("successfully running")
    });
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended:true }));
   
    app.post('/chkdata',(req,res)=>{
        const name=req.body.name;
        const pwd=req.body.password;
        db.query("SELECT name,password FROM LOGIN",(err,result)=>{
            if (err) {
                console.log(err);
                res.send(false);
            } else {
                const exists = result.some(ob => ob.name === name && ob.password === pwd);
                res.send(exists);
            }
        })
    })

    app.get('/login',(req,res)=>{
        db.query("SELECT * FROM login",(err,result)=>{
            if (err){
                console.log(err)
            }
            else{
                res.send(result)
            }
        })
    })

    app.post('/Register',(req,res)=>{
        const sqlInsert="INSERT INTO login (name,password) VALUES(?,?)"
        const name=req.body.name;
        const pass=req.body.pass;
        db.query(sqlInsert,[name,pass],(err,result)=>{
            if (err){
                console.log(err)
            }
            else{
                console.log(result)
            }
        })
    })

    
