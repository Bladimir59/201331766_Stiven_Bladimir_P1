const express = require('express');
const aplication = express();
const path = require('path');

aplication.set('port',3030);
aplication.set('views',path.join(__dirname,'views'));
aplication.set('view engine','ejs');

aplication.use(require(path.join(__dirname,'/routes/index')));

aplication.use(express.static(path.join(__dirname,'public')));

module.exports = aplication;