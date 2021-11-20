const { SSL_OP_NO_QUERY_MTU } = require("constants");
var mysql = require("mysql2");
var sql = require('mssql');

var mysqlConfig = {
    host: "localhost",
    user: "root",
    database: "spfc",
    password: "@#yNAeT6Cz",
};

function executar(instrucao){
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        return new Promise(function (resolve, reject) {
            sql.connect(sqlServerConfig).then(function () {
                return sql.query(instrucao);
            }).then(function (resultados) {
                console.log(resultados);
                resolve(resultados.recordset);
            }).catch(function (erro) {
                reject(erro);
                console.log('ERRO: ', erro);
            });
            sql.on('error', function (erro) {
                return ("ERRO NO SQL SERVER (Azure): ", erro);
            }
            );
        });
    } else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        return new Promise(function (resolve, reject) {
            var conexao = mysql.createConnection(mysqlConfig);
            conexao.connect();
            conexao.query(instrucao, function (erro, resultados) {
                conexao.end();
                if(erro){
                    reject(erro);
                }
                console.log(resultados);
                resolve(resultados);
            });
            conexao.on('error',function (erro) {
                return ("ERRO NO MYSQL WORKBENCH (Local): ", erro.sqlMessage);
            });
        });
    }else{
        return new Promise(function (resolve, reject){
            console.log("O AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM server.js");
            reject("AMBIENTE NÃO CONFIGURADO EM app.js");
        });
    }
}

module.exports = {
    executar
}