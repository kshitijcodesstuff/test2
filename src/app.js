const express = require('express');
const bodyParser = require('body-parser');
const alertRoutes = require('./routes/alertRoutes');
require('./services/binanceService'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', alertRoutes);

module.exports = app;

