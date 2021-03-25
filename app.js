const express = require('express');
const cors = require('cors');
require('dotenv/config');

const app = express();

app.use(cors());
app.use(express.json());

require('./routes/user.routes')(app);
require('./routes/posts.routes')(app);

module.exports = app;

