import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

let result = '';
let request = '';

server.get('/', (req, res) => {
  return res.json({ result });
});

server.post('/', (req, res) => {
  request = req.body.text;
  for (let i = 0; i < request.length; i++) {
    result += `${request[i].charCodeAt(0).toString(2)} `;
  }
  res.end('Text Sent!');
});

server.listen(process.env.PORT || 3000, () =>
  console.log('Express started at http://localhost:3000')
);
