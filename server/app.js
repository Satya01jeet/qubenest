require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');  // Import the connectDB function
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

// Use routes
app.use('/user', userRouter);

// Connect to MongoDB using the function from db.js
connectDB();

app.use(express.static(path.join(__dirname, 'public/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/dist/index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App is listening on port: ${port}`);
});
