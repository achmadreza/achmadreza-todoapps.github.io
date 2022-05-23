const{Login}= require("../models")
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")


class LoginTodo{

    static getLogin(req,res,next){
        
        res.render("login")
        next()
    }

    static async postLogin(req,res){
        const{username,password}= req.body
        
    try{
       
        const result=await Login.findOne({
            where:{
                username: username,
             
            }
        })

       
    let passwordIsValid=    await bcrypt.compare(password, result.password)
            
    // if (!passwordIsValid) {
    //     return res.status(401).send({
    //         auth: false,
    //         id: req.body.id,
    //         accessToken: null,
    //         message: "Error",
    //         errors: "Invalid Password!"
    //     });
    // }
    // var token = jwt.sign({result}, 'jwtsecret', { // melakukan generate token di jwt
    //             algorithm: 'HS256'
    //           });
      
              res.redirect("/todo")             
            //   res.json({message:'berhasil login', token: token});
        
             
        } 
                
      
    
    catch(error){
        console.log(error)
    }
    }

}

module.exports= LoginTodo