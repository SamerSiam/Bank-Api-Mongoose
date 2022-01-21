const mongoose = require("mongoose");
const uri =
  "mongodb+srv://admin_1:qF0YyvZNTTZGAWoq@test.99q0a.mongodb.net/Test?retryWrites=true&w=majority";

// use the connection from Atlas, need to hide the password for security reasons
mongoose.connect(uri, {
  useNewUrlParser: true,
});
