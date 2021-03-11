const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
const userRoute  = require('./routes/user');

//Routes
app.get('/', (req, res) => {
    res.send('We are on HomePage')
});


app.listen(3000);

