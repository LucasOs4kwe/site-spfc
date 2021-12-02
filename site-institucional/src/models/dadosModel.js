var database = require('site-noticias/src/database/config.js');

function t_independente(){

    var instrucaoSql = `select count(id_usuario) usuario from usuario 
    inner join torcida_organizada t_o on usuario.fk_organizada = t_o.id_torcida
    where t_o.id_torcida = 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

module.exports = {
    t_independente
}