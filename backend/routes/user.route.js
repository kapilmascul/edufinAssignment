const express = require("express");
const { UserModel } = require("../models/user.model");
const authentication=require("../middleware/authentication");
const authorise=require("../middleware/authorise");
var jwt = require('jsonwebtoken');


const userRouter = express.Router();


///Register route

userRouter.post("/register", async (req, res) => {

  try {
    const { id, name, userType } = req.body;

    let userExist = await UserModel.findOne({ id })

    if (userExist) {
      res.send({"msg":"User Already Exist"})
    } else {
      let data = {
        id,
        name,
        userType
      }
      console.log(data)
      const newUser = new UserModel(data)

      await newUser.save()

      res.send({"msg":"User created"})
    }
  } catch (error) {
    console.log(error)
  }
});

//sign in

userRouter.post("/login",async(req,res)=>{
    const {id,name}=req.body
    try{
        const user=await UserModel.find({id})

        if(user){
            const token=jwt.sign({userID:user[0]._id},process.env.key);
                    res.send({"msg":"Login successful","token":token})
        }else{
            res.send({"Msg":"wrong credentials"})
        }
    }catch(err){
        res.send({"msg":"something went wrong"})
        console.log(err)
    }
})

userRouter.get("/projects",authentication,authorise(["Admin"]),(req,res)=>{
    res.send("add products...")
  })

  module.exports={
    userRouter
  }