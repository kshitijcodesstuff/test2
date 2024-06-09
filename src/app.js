const express = require('express');
const bodyParser = require('body-parser');
const alertRoutes = require('./routes/alertRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', alertRoutes);

module.exports = app;
