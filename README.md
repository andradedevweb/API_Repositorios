# API Repositórios GitHub

Este projeto é uma aplicação Node.js que realiza web scraping na página de repositórios de um usuário GitHub específico e retorna os nomes dos repositórios para uma API em formato JSON.

## Como funciona

A aplicação utiliza os seguintes módulos:

- **axios**: Para fazer solicitações HTTP.
- **cheerio**: Para analisar e manipular o HTML obtido.
- **express**: Para criar um servidor web e disponibilizar os dados obtidos.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Instale as dependencias

   ```bash
   npm install axios cheerio express

3. Execute com

   ```bash
   node index.js

## Exemplo de Resposta

Ao acessar a URL do servidor, você receberá uma lista dos nomes dos repositórios do usuário GitHub especificado no formato JSON.

Exemplo:
```json
[
  {
    "nomeRepositorio": "exemplo1"
  },
  {
    "nomeRepositorio": "exemplo2"
  },
  {
    "nomeRepositorio": "exemplo3"
  }
]

