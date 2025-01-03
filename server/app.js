require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');
const paymentRouter = require('./routes/paymentRoutes');
const buildingRouter = require('./routes/buildingRoutes');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(bodyParser.json());
const port = process.env.PORT || 3000;

// Use routes
app.use('/user', userRouter);
app.use('/payment', paymentRouter);
app.use('/rooms', buildingRouter);

// Connect to MongoDB using the function from db.js
connectDB();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App is listening on port: ${port}`);
});

// adding something to check
