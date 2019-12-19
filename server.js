// importando os pacotes para uso no arquivo index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// crio um servidor express
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true}));

let result = "";
// criação de rota que será acessada utilizando o método HTTP GET/


server.get('/payload', (req,res) =>{
  return res.json({result});
})


// criação de rota que será acessada utilizando o método HTTP POST/
// http://localhost:9000/add
server.post('/add', (req, res) => {
  
  result = req.body;

});

// o servidor irá rodar dentro da porta 9000
server.listen(3000, () => console.log('Express started at http://localhost:3000'));
