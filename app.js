const cors = require('cors'); 
const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const connectToDatabase = require('./config/dbConfig.js');

const app = express();
const PORT = 4000;

// Connect to MongoDB
connectToDatabase();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
