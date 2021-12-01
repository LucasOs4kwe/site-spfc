var database = require('site-noticias/src/database/config.js');

function dados_organizada(){

    var id_organizada = 2;

    var instrucaoSql = `select count(fk_organizada) as organizada from usuario inner join 
    torcida_organizada to on usuario.fk_jogador = to.id_organizada
    where to.id_organizada = ${id_organizada}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

// function dados_jogador(id_jogador){
//     instrucaoSql = `select count(fk_jogador) as Jogador from usuario inner join 
//     jogador on usuario.fk_jogador = jogador.id_jogador
//     where jogador.id_jogador = ${id_organizada};` 
// }

module.exports = {
    dados_organizada
}