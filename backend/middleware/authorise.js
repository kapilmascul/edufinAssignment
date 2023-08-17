const authorise=(permittedRoles)=>{
    return (req,res,next)=>{
         const userRole=req.User.userType
         if(permittedRoles.includes(userRole)){
             next()
         }else{
          res.send("Unauthorized")
         }
    }
  }

module.exports={
    authorise
}