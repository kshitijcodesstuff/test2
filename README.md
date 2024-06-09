# Crypto Price Alert System

This is a Node.js application that provides functionality for creating and managing price alerts for the BTC/USDT trading pair on the Binance cryptocurrency exchange. The application uses WebSockets to receive real-time trade data and updates the alert status accordingly.

## Features

- Create price alerts for the BTC/USDT trading pair
- Retrieve a list of existing alerts
- Update the status of an alert (pending or completed)
- Real-time WebSocket connection to receive trade data from Binance
- PostgreSQL database for persistent data storage

## Technologies Used

- Node.js
- Express.js
- WebSockets
- Prisma (ORM)
- PostgreSQL

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- PostgreSQL (with a running instance)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kshitijcodesstuff/test2.git
   ```

2. Install dependencies:

   ```bash
   cd test2
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and provide the following environment variables:

   ```
   PORT=3000
   DATABASE_URL=your_postgres_connection_url
   TRADING_PAIR=btcusdt
   ```

   Replace the placeholders with your actual values.

4. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the application:

   ```bash
   node src/server.js
   ```

   The application should now be running on `http://localhost:3000`.

## Usage

You can use a tool like Postman or cURL to interact with the API endpoints:

- **Create an Alert**:
  ```
  POST http://localhost:3000/api/alerts
  ```
  Request Body:
  ```json
  {
    "value": 30000,
    "direction": "UP"
  }
  ```

- **Get Alerts**:
  ```
  GET http://localhost:3000/api/alerts
  ```

- **Update Alert Status**:
  ```
  PUT http://localhost:3000/api/alerts/:id/status
  ```
  Request Body:
  ```json
  {
    "status": "completed"
  }
  ```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


