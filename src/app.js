const express = require('express');
const controllerUser = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/users', controllerUser.getAll);

app.get('/users/:id', controllerUser.getById);

app.get('/users/search/:id', controllerUser.getByIdAndEmail);

app.post('/users', controllerUser.createUser);

app.put('/users/:id', controllerUser.updateUser);

module.exports = app;