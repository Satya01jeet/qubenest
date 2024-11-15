require('dotenv').config;
const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});