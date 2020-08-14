const express = require('express');
const Academy = require('../academy/academyModel.js');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({api: 'peek a boo i see you'});
});

server.get('/academy', (req, res) => {
    Academy.getAll()
        .then(academy => {
            res.status(200).json(academy)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});
module.exports = server;
