import express from "express";
import dotenv from 'dotenv';
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from 'cors'
import authRoutes from "./routes/authRoute.js"

import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
//const express = require ("express")

//configure env

//if it env is  in our root then we use like this 
//dotenv.config({path:''});
dotenv.config();
connectDB();
const app = express();

//middleware 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);
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