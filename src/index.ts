import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.listen(PORT, function(){console.log(`Rodando ${PORT}`)});

app.use(routes);

app.use(function(req,res){
    res.send("Rota desconhecida");
})