var database = require("../database/config")

function entrar(email, senha){
    var instrucao = `
        SELECT * FROM user WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: " + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha){
    var instrucao = `
        INSERT INTO user (nome, email, senha) VALUES ('${nome}', '${email}','${senha}');
    `;
    console.log("Executando a instrução SQL: " + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar
}