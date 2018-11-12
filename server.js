'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
const appApi = express();

const users = [
    {
        id: 1,
        name: 'Henrik',
        age: 13
    },
    {
        id: 2,
        name: 'Olga',
        age: 25
    }];
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/api', appApi);

app.get('/', (req, res) => {
    res.send('Hello world\n');
});

appApi.get('/users', function (req, res) {
    res.send({ users: users});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);