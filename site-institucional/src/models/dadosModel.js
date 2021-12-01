var database = require('site-institucional/src/database/config.js');

function dados_Torganizada(id_organizada){
    instrucaoSql = `select count(fk_jogador) as Jogador from usuario inner join 
    jogador on usuario.fk_jogador = jogador.id_jogador
    where jogador.id_jogador = ${id_organizada};`
}

function dados_jogador(id_jogador){
    instrucaoSql = `select count(fk_jogador) as Jogador from usuario inner join 
    jogador on usuario.fk_jogador = jogador.id_jogador
    where jogador.id_jogador = ${id_organizada};` 
}