const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("Hola dev Heroku + NodeJS!!");
});

app.listen(port, ()=>{
    console.log("Rodando o app no Heroku");
});
