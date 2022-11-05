const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    console.log('detect a request! [/]');
    res.status(200).send({Message: 'OK'});
})
app.get("/calc", (req, res) => {
    console.log('detect a request [/calc]');
    res.status(200).send({version : '0.1'});
})

app.listen(4000, () => {
    console.log('SERVER STARTED ON PORT [4000]');
})