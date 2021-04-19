import express, { request, response } from "express";
//adicionando a dependência de tipagem para o express
const app = express();

//criando rota
app.get("/", (request, response) => {
    return response.send("Olá MLW 05");
});
//criando rota post
app.post("/users", (request, response) => {
    return response.json({
        message: "Usuário Cadastrado com Sucesso!"
    });
});



//definindo a porta para o servidor
app.listen(3335, () => console.log("O servidor está sendo executado na porta 3335"));