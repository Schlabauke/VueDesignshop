const express = require('express');
const { getAllItems } = require('./db-access/userdao');
const app = express();
require('dotenv').config();

//Anfrage zur Datenbank & Ausgabe von Json-Datei

app.get('/items', (req, res) => {
    getAllItems().then((shopItems) => {
        console.log(shopItems);
        res.send(shopItems);
    });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on Port:', PORT));
