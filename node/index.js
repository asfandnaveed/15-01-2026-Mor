const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use('/uploads' , express.static('uploads'));


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"corvit_15_02_2026"
});


db.connect( (err)=>{

    if(err){
        console.log("Connection Error !");
    }else{
        console.log("Connection Success !");
    }
} );











// localhost:3000/api/products
app.get('/api/products' , (req , res )=>{


    const sql = "SELECT * FROM products";

    db.query(sql , (err , result )=>{

        if(err){
            res.json({
                status:false,
                message:"Unable to Fetch Products !"
            });

        }else{
            res.json({
                status:true,
                message:"Products Data !",
                products:result
            });
        }

    });

    
});

app.get('/api/products/:id' , (req , res)=>{

    const productId = req.params.id;

    const sql = "SELECT * FROM products WHERE id=?";

    db.query(sql , [productId] , (err , result)=>{

        if(err){
            res.json({
                status:false,
                message:"Unable to Fetch Product Detail !"
            });

        }else{
            res.json({
                status:true,
                message:"Products Detail !",
                product:result[0]
            });
        }
    });

});





// localhost:3000
const PORT = 3000; 
app.listen( PORT,()=>{
    console.log('Project is Running !!');
});