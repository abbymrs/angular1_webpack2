const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('./src'));
app.use(express.static('./node_modules'));

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('server running on port: ' + PORT);
});

app.get('/api/process', (req, res) => {
    console.log(process);
    res.send(process.env).end();
});