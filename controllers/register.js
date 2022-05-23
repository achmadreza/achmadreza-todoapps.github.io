const{Login}= require("../models")
const bcrypt= require("bcrypt")



class RegisterTodo{
    static getRegister(req,res){
        res.render("register")
    }
    static async postRegister(req,res){
        try{
            const {username, email, password}= req.body
        
            const hashPassword= await bcrypt.hash(password, 10)
            const newUser= {
                username: username,
                email: email,
                password: hashPassword
                       
            };
                     Login.create(newUser).then(result=> {
                        
                    
                        res.redirect('/')
                        
                })
    
        }
        catch{
           console.log(error) 
        }
                
    }
}

module.exports= RegisterTodo