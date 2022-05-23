const express= require ("express");
const cors= require("cors");
const app= express();
const PORT= 3500
const router= require("./routes/index");
const session= require("express-session");
const bodyParser= require("body-parser")

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
app.set("view engine", "ejs");
app.use(session({
    secret: "secret"
}))



app.use(router);
app.listen(PORT, ()=>console.log("Server on Port", PORT))

module.exports=app