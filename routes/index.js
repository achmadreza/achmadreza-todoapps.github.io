const express= require("express")
const router= express()
const Languange= require("../controllers/languange.js")
const LoginTodo= require("../controllers/login.js")
const RegisterTodo= require("../controllers/register.js")
const verifToken= require("../middleware/auth")



router.post("/add/todo", Languange.LanguangeItem)
router.get("/todo", Languange.GetAllLanguange)
router.get("/delete/:id", Languange.deleteTodo)
router.post("/edit/:id", Languange.postEditTodo)
router.get("/edit/:id", Languange.getEditTodo)
router.get("/", LoginTodo.getLogin)
router.post("/login/todo",LoginTodo.postLogin)
router.get("/register",RegisterTodo.getRegister)
router.post("/register/todo", RegisterTodo.postRegister)




module.exports= router