require('./db/connection');
require("dotenv").config({ path: "./config/.env" });

const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

require('./routes/user.routes')(app);
require('./routes/posts.routes')(app);

module.exports = app;

