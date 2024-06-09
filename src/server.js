const app = require('./app');
const binanceWebSocket = require('./services/binanceService');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  binanceWebSocket;
});
