// Arquivo de inicio da aplicação

// Importando o express
const express = require("express");

// Criando a class App
class App{

    //Criando o construtor
    constructor(){
        // Adicionando a propriedade server
        this.server = express();
    }

    // Criando o método middleware
    // Ele faz a camada entre o App e o express, interceptando e controlando as requisições
    middlewares(){

        // Para manipular json
        this.server.use(express.json());
        
    }
}

