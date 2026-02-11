const express = require('express');
const dorenv = require('dotenv');
dorenv.config();
const app = express();
const path = require('path');
const connectDB = require('./connectDB');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));

});

connectDB(); //DBmongodb+srv://AnaisPouget_db_user:AnaisPouget_db_user@cluster0.r0rqqbc.mongodb.net/?appName=Cluster0
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});