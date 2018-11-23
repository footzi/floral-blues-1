const express = require('express');
const twig = require('twig');
const path = require('path');
const config = require('./config');
const clientRoute = require('../api/routes/client.js');

const app = express();

// отдаем статичные файлы
app.use(express.static(path.join(__dirname, '/../client')));

// подключаем шаблонизатор, и нацелеваем на views
app.set('views', path.join(__dirname + '/../client/src/pages'));
app.set('view engine', 'twig');
app.set('twig options', {strict_variables: false});

// Обработка запросов
app.use('/', clientRoute);

// Запуск сервера
app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}!`);
});