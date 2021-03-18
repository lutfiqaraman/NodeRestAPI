const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// MongoDB Model
const User = require('../models/User');
const Post = require('../models/Post');

// VALIDATION Import
const { registerValidation, loginValidation } = require('../validation');

//Register User
router.post('/register', async (req, res) => {

})
