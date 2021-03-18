const express = require("express")
const app = express()
const multer = require("multer")

app.set('view engine','ejs')

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(3000,()=>{
    console.log("Servidor rodando em http://localhost:3000")
})