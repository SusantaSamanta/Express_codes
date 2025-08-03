const mongoose = require("mongoose");
require('dotenv').config();
const connectdb = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URL);
        console.log('✅ MongoDB connected successfully');
    } catch (err) {
        console.error('❌ MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectdb;
