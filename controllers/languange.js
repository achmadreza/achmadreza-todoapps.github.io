const {Programming_Languange}= require("../models")


class Languange{
    static LanguangeItem(req,res){
        let data= req.body
        console.log(data)

        Programming_Languange.create(data)
            .then(result=>{
                // res.status(200).json(result)
                res.redirect("/todo")
            })
            .catch(error=>{
                console.log(error)
            })   
    }
    static async GetAllLanguange(req,res,){
        const allTodo= await Programming_Languange.findAll()
        res.render("index",{
            data: allTodo
        
        })
        
        console.log(allTodo)
    } 
    static async deleteTodo(req,res){
        try{
            let id=req.params.id
            await Programming_Languange.destroy({
                where: {
                id:id
                }
            })
            res.redirect("/todo")
        }
        catch(error){
            console.log(error)
        }
    }
    static async postEditTodo(req,res){
   
            const id= req.params.id
            const{name}=req.body
            try{
                await Programming_Languange.findOne({
                    where:{
                        id:id
                    }
                }).then(result => {
                    let userValue = {
                    name:name
                    }
                    result.update(userValue).then(updatedResult => {
                     console.log(updatedResult);
                    });
                     });
                     res.redirect("/todo")
            }
            catch(error){

            }
        }
        static getEditTodo(req,res){
            let id=req.params.id
                    
            Programming_Languange.findOne({
                where:{
                    id
                }
            })
            .then(result=>{
                // res.status(200).json(result)
                let data = result
                
                // console.log(user)
                res.render('editLang', {
                    data: data,
                        
                })
            //  console.log(biodata)   
               
            }).catch(error=>{
                res.status(500).json(error)
            })
        }

}

module.exports= Languange











