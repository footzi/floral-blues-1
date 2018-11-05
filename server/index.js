import express from 'express';
import twig from 'twig';
import path from 'path';
import config from "./config";
import clientRoute from "../api/routes/client.js";

const app = express();

// отдаем статичные файлы
app.use(express.static(path.join(__dirname, '/../client')));

// подключаем шаблонизатор, и нацелеваем на views
app.set('views', path.join(__dirname + '/../client/src/pages'));
app.set('view engine', 'twig');
app.set('twig options', {
    strict_variables: false
});
console.log(path.join(__dirname + '/../client/pages'));

//Обработка запросов
app.use('/', clientRoute);

// Запуск сервера
app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}!`);
});