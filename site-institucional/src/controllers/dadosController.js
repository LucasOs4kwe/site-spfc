var dadosModel = require("../models/dadosModel");


function testar(req, res) {
  console.log("ENTRAMOS NO avisoController");
  res.send("ENTRAMOS NO AVISO CONTROLLER");
}

function dados_organizada(req, res){
  dadosModel.dados_organizada().then(function (resultado) {
    if(resultado.lenght > 0){
      res.status(200).json(resultado);
    }else{
      res.status(204).send("Nenhum resultado encontrado!");
    }
  }).catch(function (err){
    console.log(err);
    console.log("Houve um erro ao buscar os avisos: ", err.sqlMessage);
    res.status(500).json(err.sqlMessage);
  })
}
function listar_user(req, res){
    var id_usuario = req.params.id_usuario;

    dadosModel.listar_user(id_usuario)
    .then(
      function(resultado){
        if(resultado.lenght > 0){
          res.status(200).json(resultado);
        }else{
          res.status(204).send("Nenhum resultado encontrado!")
        }
      }
    )
    .catch(
      function (err){
        console.log(err);
        console.log("Houve um erro ao bsucar os avisos: ", err.sqlMessage
        );
        res.status(500).json(err.sqlMessage)
      }
    )
}

module.exports = {
  dados_organizada,
  listar_user
}