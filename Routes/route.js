const express = require('express');
const app = express();

const database = require('../db/db.json');
const fs = require('fs');
const { fileRead, fileWrite, readAppend } = require('../Utils/utils');

const { v4: uuidv4 } = require('uuid');

app.get('/notes', (req,res) => {
    fileRead('./db/db.json')
    .then((data) => {
        res.json(JSON.parse(data));
    })
});

app.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
        const addNote = {
            title,
            text,
            id: uuidv4(),
        }
        readAppend(addNote, '../db/db.json');
        res.json(`${req.method} request received`);
    } else {
        res.error('Note Failed');
    }
});


module.exports = app;