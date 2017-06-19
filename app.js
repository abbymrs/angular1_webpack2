const express = require('express');
const bodyParser = require('body-parser');
const low = require('lowdb');
let userDb = low('./data/user.json');

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

app.get('/api/login', (req, res) => {
    var obj = {
        status: 0,
        mgs: 'user name or password is not correct!'
    };
    var name = req.query.username;
    var psd = req.query.psd;
    var user = userDb.find({ name: name }).value();
    if (user && psd == user.psd) {
        obj = {
            status: 1,
            mgs: 'login successfully!'
        }
    }
    res.send(obj).end();
});

app.post('/api/register', (req, res) => {
    var obj = {
        status: 0,
        mgs: 'error occurs!'
    };
    var user = req.body;
    userDb.push(user).value();
    obj = {
        status: 1,
        mgs: 'register successfully!'
    }
    res.send(obj).end();
});