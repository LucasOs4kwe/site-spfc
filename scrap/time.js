const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.sofascore.com/team/football/sao-paulo/1981';

axios(url).then(response =>{
    const html = response.data;
    const $ = cheerio.load(html);
    const tabelaStatus = $('styles__TopPlayerList-sc-1kk2af3-1 bPZyNp');
    const tabelaJogador = [];

    tabelaStatus.each(function(){
        const nomeJogador = $(this).find('Content-sc-1morvta-0 ixemiF fw-medium').text();
        tabelaJogador.push({
            nomeJogador
        })
    })
    console.log(tabelaJogador);
}).catch(console.error);


// https://www.mundojs.com.br/2020/05/25/criando-um-web-scraper-com-nodejs/