const express = require('express');
const bodyParser = require('body-parser');
const alertRoutes = require('./routes/alertRoutes');
require('./config/redis'); // Ensure Redis is configured
require('./services/binanceService'); // Ensure the Binance service starts

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', alertRoutes);

module.exports = app;

