const express = require("express");
const User = require("../models/user");
const router = new express.Router();

/**********************get all users******************* */
router.get("/users", async (req, res) => {
  try {
    const user = await User.find({});
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
