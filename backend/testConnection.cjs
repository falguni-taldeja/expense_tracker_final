// testConnection.cjs
const mongoose = require('mongoose');
const dotenv = require('dotenv');

require('dotenv').config();

const uri = process.env.MONGODB_URI;

console.log('🔍 Trying to connect to:', uri);

mongoose.connect(uri)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Connection failed:', err.message);
    process.exit(1);
  });