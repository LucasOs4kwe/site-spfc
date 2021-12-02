var dadosModel = require("../models/dadosModel");


function t_independente(req, res){
  dadosModel.t_independente().then(function (resultado) {
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
  t_independente,
  listar_user
}