const { createAlert, getAlerts } = require('../models/alert');

const createAlertHandler = async (req, res) => {
  const { value, direction } = req.body;
  const newAlert = await createAlert(value, direction);
  res.status(201).json(newAlert);
};

const getAlertsHandler = async (req, res) => {
  const alerts = await getAlerts();
  res.status(200).json(alerts);
};

module.exports = { createAlertHandler, getAlertsHandler };

