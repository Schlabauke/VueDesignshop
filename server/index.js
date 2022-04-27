const express = require('express');
const { getAllItems } = require('./db-access/userdao');
const bodyParser = require('body-parser');
const { _getDB } = require('./db-access/db');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Anfrage zur Datenbank & Ausgabe von Json-Datei

app.get('/items', (req, res) => {
    getAllItems().then((shopItems) => {
        res.send(shopItems);
    });
});

app.post('/addItem', (req, res) => {
    console.log('Post-Route', req.body);
    const product = req.body;
    _getDB()
        .then((db) => {
            db.collection('shopitems').insertOne(product);
        })
        .then(() => {
            res.redirect('http://localhost:8080/');
        })
        .catch((err) => {
            res.send(err);
        });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on Port:', PORT));
