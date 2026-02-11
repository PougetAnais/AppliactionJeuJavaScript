//mongodb+srv://AnaisPouget_db_user:AnaisPouget_db_user@cluster0.r0rqqbc.mongodb.net/?appName=Cluster0

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Suppression de l'objet d'options vide ou mal formé
        const conn = await mongoose.connect(process.env.MD_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectDB;