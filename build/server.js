"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var server = express_1.default();
server.use(cors_1.default());
server.use(body_parser_1.default.json());
server.use(body_parser_1.default.urlencoded({ extended: true }));
var result = '';
var request = '';
server.get('/', function (req, res) {
    return res.json({ result: result });
});
server.post('/', function (req, res) {
    request = req.body.text;
    for (var i = 0; i < request.length; i++) {
        result += request[i].charCodeAt(0).toString(2) + " ";
    }
    res.end('Text Sent!');
});
server.listen(process.env.PORT || 3000, function () {
    return console.log('Express started at http://localhost:3000');
});
