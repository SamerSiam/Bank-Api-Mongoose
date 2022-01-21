require("dotenv").config();

const mongoose = require("mongoose");

const uri = `mongodb+srv://admin_1:${process.env.PASSWORD}@test.99q0a.mongodb.net/Bank-API?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
});

// mongodb://127.0.0.1:27017/ecommerce-api

//`mongodb+srv://admin_1:${process.env.PASSWORD}@test.99q0a.mongodb.net/Test?retryWrites=true&w=majority`

// `mongodb+srv://admin_1:${process.env.PASSWORD}@test.99q0a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// qF0YyvZNTTZGAWoq
