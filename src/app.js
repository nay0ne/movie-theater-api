const express = require("express");
const app = express();
const users = require("./routes/users");
const shows = require("./routes/shows");
app.use("/users", users);
app.use("/shows", shows);
const { db } = require('../db/connection');
app.use(express.json());