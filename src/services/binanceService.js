const WebSocket = require('ws');
const { updateAlertStatus, getAlerts } = require('../models/alert');

const binanceWebSocket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

binanceWebSocket.onmessage = async (event) => {
  try {
    const data = JSON.parse(event.data);
    const currentPrice = parseFloat(data.p);

    const alerts = await getAlerts();
    for (const alert of alerts) {
      if (alert.status === 'pending') {
        if ((alert.direction === 'UP' && currentPrice > alert.value) ||
            (alert.direction === 'DOWN' && currentPrice < alert.value)) {
          await updateAlertStatus(alert.id, 'completed');
          console.log(`Alert triggered: ${alert.id} at price ${currentPrice}`);
        }
      }
    }
  } catch (error) {
    console.error('Error processing WebSocket message', error);
  }
};

module.exports = binanceWebSocket;



