const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

prisma.$connect().catch(err => {
  console.error('Error connecting to the database', err);
  process.exit(1);
});

module.exports = prisma;


