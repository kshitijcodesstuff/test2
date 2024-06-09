const prisma = require('../utils/db');

const getAlerts = async () => {
  return await prisma.alert.findMany();
};

const updateAlertStatus = async (id, status) => {
  return await prisma.alert.update({
    where: { id },
    data: { status }
  });
};

module.exports = { getAlerts, updateAlertStatus };

