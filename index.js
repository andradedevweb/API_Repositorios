const axios = require("axios");
const cheerio = require("cheerio");
const express = require('express')
const app = express()

const url = "https://github.com/andradedevweb?tab=repositories";

async function getMovies() {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const list = [];
    $(".wb-break-all").each((elem) => {
        const filtro = $(elem).find('a');
        const nomeRepositorio = filtro.last().text().replace("\n", "");
        if (nomeRepositorio !== "") {
            repositorio = {nomeRepositorio};
            list.push(repositorio);
        }
    });
    app.get('/',(req, res)=>{
        res.json(list)
    })
}


getMovies();
app.listen(3000)