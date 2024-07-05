const { createAlert, getAlerts, updateAlertStatus } = require('../models/alert');

const createAlertHandler = async (req, res) => {
  const { value, direction } = req.body;

  try {
    const newAlert = await createAlert(value, direction);
    res.status(201).json(newAlert);
  } catch (error) {
    console.error('Error creating alert:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
};

const getAlertsHandler = async (req, res) => {
  try {
    const alerts = await getAlerts();
    res.status(200).json(alerts);
  } catch (error) {
    console.error('Error getting alerts:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
};

const updateAlertStatusHandler = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedAlert = await updateAlertStatus(id, status);
    res.status(200).json(updatedAlert);
  } catch (error) {
    console.error('Error updating alert status:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
};

module.exports = {
  createAlertHandler,
  getAlertsHandler,
  updateAlertStatusHandler
};





