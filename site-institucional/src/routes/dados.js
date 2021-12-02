var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get("/", function (req, res){
  dadosController.testar(req, res);
});

router.get("/t_independente", function (req, res){
  dadosController.t_independente(req,res);
});

