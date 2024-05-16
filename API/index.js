//Importando os modulos ultilizados
const axios = require("axios");
const cheerio = require("cheerio");
const express = require('express')

//Criando meu servidor
const app = express()

/* Web scraping */

//Definindo a Url a ser acessada
const url = "https://github.com/andradedevweb?tab=repositories";

//Criando uma função assincrona q le o documento HTML e seleciona as tags q desejamos
async function scraping() {

    //Usa o axios para ler a url e armazenar seus dados
    const { data } = await axios.get(url);
    //Carrega o documento HTML lido para a biblioteca q manipulara o DOM
    const $ = cheerio.load(data);
    //Array q armazenara os dados obtidos q serão enviados em .json pela API
    const list = [];

    //Loop q seleciona os elementos q iremos ler
    $(".wb-break-all").each((elem) => {
        //Filtra os elementos para obter os q tem a tag 'a'
        const filtro = $(elem).find('a');
        //Ajustando os dados q serão enviado pelo Json
        const nomeRepositorio = filtro.last().text().replace("\n", "");
        if (nomeRepositorio !== "") {
            repositorio = {nomeRepositorio};
            list.push(repositorio);
        }
    });

    //Endpoint q irá enviar os dados obtidos em formato .json 
    app.get('/',(req, res, err)=>{
        //Se houver um erro o código de erro será enviado
        if(err){
            res.sendStatus(400)
        }

        //Envia a lista de repositórios como resposta após a url ser solicitada
        res.json(list)
    })
}

//Chamo a função principal
scraping();

//Inicio o servidor
app.listen(3000, ()=>{
    console.log("Rodando na porta 3000!")
})
