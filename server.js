const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const fs = require('fs');
const path = require('path');
const routes =  require('./Routes/route');

//raw request
//parse request into json
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//tells request where to look for resources
app.use(express.static('public'));
app.use('/api', routes);





app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})



app.listen(PORT, () => console.log("Server is listening on PORT 3002 ..."));