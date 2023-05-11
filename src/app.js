const express = require("express");
const app = express();
const users = require("./routes/users");
app.use("/users", users);
const { db } = require('../db/connection');
app.use(express.json());