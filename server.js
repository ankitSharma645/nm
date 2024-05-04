import express from "express";
import dotenv from 'dotenv';
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
//const express = require ("express")

//configure env

//if it env is  in our root then we use like this 
//dotenv.config({path:''});
dotenv.config();
connectDB();
const app = express();

//middleware 
app.use(express.json());
app.use(morgan('dev'));

// rest api
app.get("/",(req,res)=>{
    res.send("<h1> Welcome to Sharma's world</h1>"
        
    ); 
});

const port = process.env.port ||8080
// run listen
app.listen(port,()=>{
    console.log(`server running ${port}`);
});  