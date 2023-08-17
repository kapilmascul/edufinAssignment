const express=require("express");
const cors=require("cors");
const { connection } = require("./config/connection");
const { userRouter } = require("./routes/user.route");
const app=express();
require('dotenv').config()


app.use(express.json());

app.use(cors());


app.get("/user",userRouter)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`connected to DB port running at ${process.env.port}`)
    } catch (error) {
        
    }
})