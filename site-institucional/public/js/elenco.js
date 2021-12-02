
const select = document.getElementById('setor_slct');
select.addEventListener('change', function(){
    var div = document.getElementsByClassName('player-box');
    var valor = setor_slct.value;
    if(valor == "ataque"){
        for(var i = 0; i < div.length; i++){
            if(div[i].className == 'player-box mid' || div[i].className == 'player-box def'){
                div[i].style.display = "none";
            }
        }
        title_elenco.innerHTML = "ATACANTES";
    }else if(valor == "meio_campo"){
        for(var i = 0; i < div.length; i++){
            if(div[i].className == 'player-box atk' || div[i].className == 'player-box def'){
                div[i].style.display = "none";
            }else{
                div[i].style.display = "block";
            }
        }
        title_elenco.innerHTML = "MEIO CAMPISTAS";
    }else if(valor == "defesa"){
        for(var i = 0; i < div.length; i++){
            if(div[i].className == 'player-box atk' || div[i].className == 'player-box mid'){
                div[i].style.display = "none";
            }else{
                div[i].style.display = "block";
            }
        }
        title_elenco.innerHTML = "DEFENSORES";
    }else{
        for(var i = 0; i < div.length; i++){
            if(div[i].className == 'player-box mid' || div[i].className == 'player-box def' || div[i].className == 'player-box atk'){
                div[i].style.display = "block";
            }else{
                div[i].style.display = "block";
            }
        }
        title_elenco.innerHTML = "Elenco Completo";
    }
    
});

