var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get("/", function (req, res){
  dadosController.testar(req, res);
});

router.get("/dados_organizada", function (req, res){
  dadosController.dados_organizada(req,res);
});
router.get("/listar/:idUsuario", function (req, res){
  dadosController.listar_user(req, res);
})
