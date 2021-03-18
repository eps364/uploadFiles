const express = require("express")
const app = express()
const multer = require("multer")
const path = require("path")
const crypto = require("crypto")

app.set('view engine','ejs')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"uploads/")
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+ "-" + crypto.randomBytes(6).toString("hex") + path.extname(file.originalname))
    }
})
const upload = multer({
    storage
})



app.get("/", (req, res) => {
    res.render("index")
})

app.post("/upload",upload.single("file") ,(req, res) => {
    res.send("Arquivo Recebido!")
})

app.listen(3000,()=>{
    console.log("Servidor rodando em http://localhost:3000")
})