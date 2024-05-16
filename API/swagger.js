const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API Portifólio',
    description: 'Uma API que efetua um web scraping de meus repositórios github e os retorna como Json'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./index.js', './index.js'];

swaggerAutogen(outputFile, routes, doc);