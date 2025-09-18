// seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Connect to MongoDB
const uri = process.env.MONGO_URI;

console.log('🔍 Seeding with URI:', uri);

mongoose.connect(uri)
  .then(() => {
    console.log('✅ Connected to MongoDB. Starting seeding...');

    // TODO: Add your seeding logic here
    // Example: await Model.insertMany(data);

    console.log('🌱 Seeding complete!');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('❌ Seeding error:', err.message);
    process.exit(1);
  });