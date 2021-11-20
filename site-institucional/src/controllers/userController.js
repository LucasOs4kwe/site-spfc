var userModel = require('../models/userModel');

var section = [];

function testar(req, res) {
    console.log('ENTRAMOS NA usuarioController');
    res.json("ESTAMOS FUNCIONANDO!");
}

function entrar(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    if(email == undefined){
        res.status(400).send("Seu email está undefined!");
    }else if(senha == undefined){
        res.status(400).send("Sua senha está undefined!");
    }else{
        userModel.entrar(email,senha)
            .then(
                function(resultado){
                    console.log(`Resultados encontrados: ${resultado.lenght}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`);

                    if(resultado.lenght == 1){
                        console.log(resultado)
                    }
                }
            )
        }
    }