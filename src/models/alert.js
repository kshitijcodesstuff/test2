const prisma = require('../utils/db');

const createAlert = async (value, direction) => {
  return await prisma.alert.create({
    data: {
      value,
      direction,
      status: 'pending',
    },
  });
};

const getAlerts = async () => {
  return await prisma.alert.findMany();
};

const updateAlertStatus = async (id, status) => {
  return await prisma.alert.update({
    where: { id },
    data: { status }
  });
};

module.exports = { createAlert,getAlerts, updateAlertStatus };




