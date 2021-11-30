
const select = document.getElementById('setor_slct');
select.addEventListener('change', function(){
    var valor = setor_slct.value;
    var ataque = document.getElementsByClassName('atk');
    var defesa = document.getElementsByClassName('def');
    var meio = document.getElementsByClassName('mid')
    var player = document.getElementsByClassName('player-box');
    if(valor == "ataque"){
        for(var i = 0; i < player.length; i++){
            meio[i].style.display = 'none';
            defesa[i].style.display = 'none';
        }
    }
});

