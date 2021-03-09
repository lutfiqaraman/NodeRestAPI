// Connect MongoDB
const mongoose = require('mongoose');
const connection = process.env.DB_CONNECTION;

mongoose.connect(connection, { useUnifiedTopology: true, useNewUrlParser: true  }, () => {
    console.log("Connected to DB");
});
