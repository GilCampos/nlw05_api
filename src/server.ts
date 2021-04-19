import express from "express";
//adicionando a dependência de tipagem para o express
const app = express();
//definindo a porta para o servidor
app.listen(3335, () => console.log("O servidor está sendo executado na porta 3335"));