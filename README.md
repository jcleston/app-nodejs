<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jcleston/app-nodejs">  
  <a href="https://github.com/jcleston/app-nodejs/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jcleston/app-nodejs">
  </a>
   <a href="https://github.com/jcleston/app-nodejs/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jcleston/app-nodejs?style=social">
  </a>
  <a href="https://www.linkedin.com/in/janescleston/">
    <img alt="Feito por Janes Cleston" src="https://img.shields.io/badge/feito%20por-Janes%20Cleston-%237519C1">
  </a>
</p>


## Menu Geral
<!--ts-->
 * [Instalação](#instalação)
    * [nodejs](#nodejs)
    * [yarn](#yarn)
 * [Criação do projeto](#criação-do-projeto)
 * [Adição de bibliotecas](#adição-de-bibliotecas)
    * [express](#express)
    * [nodemon](#nodemon)
    * [sucrase](#sucrase)
    * [eslint](#eslint)
    * [prettier](#prettier)
* [Execução](#execução)
      
<!--te-->
<br /><br />

## Instalação
## nodejs
https://nodejs.org

## yarn
https://yarnpkg.com

<br />

## Criação do projeto

Criar o diretório para o projeto
```shell
$ mkdir nome_do_projeto
$ cd nome_do_projeto
```

Iniciar com o yarn
```shell
$ yarn init -y
```
<br />

## Adição de bibliotecas
## express
```shell
$ yarn add express
```

## nodemon
```shell
$ yarn add nodemon -D
```

## sucrase
```shell
$ yarn add sucrase -D
```

## eslint
```shell
$ yarn add eslint -D
$ yarn eslint --init

Configuração do eslint na sequencia:
y
To check syntax, find problems, and enforce code style
JavaScript modules (import/export)
None of these
No
Node
Use a popular style guide
Airbnb: https://github.com/airbnb/javascript
JavaScript
Yes
npm
![Captura de ecrã de 2022-08-11 16-26-14](https://user-images.githubusercontent.com/13952621/184224097-acb4f86f-ed60-414e-bce9-ac2b129731ab.png)
```

Configuração do vscode, atalho 'Crtl,', editar o settings.json, adicionando as seguintes linhas
```shell
"eslint.autoFixOnSave": true,
    "eslint.packageManager": "yarn",
    "eslint.validate": [
    {
        "language": "javascript",
        "autoFix": true,
    },
    {
        "language": "javascriptreact",
        "autoFix": true,
    },
    {
        "language": "typescript",
        "autoFix": true,
    },
    {
        "language": "typescriptreact",
        "autoFix": true,
    }
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```

## prettier
```shell
$ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Comando para rodar o eslint no diretório
```shell
$ yarn eslint --fix src --ext .js
```

<br />

## Execução
Rode o comando do terminal no diretório raiz do projeto
```shell
$ node index.js
```
Acesse o endereço no navegador
http://localhost:3000/hello

<br />

