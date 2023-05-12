const express = require("express");
const app = express();
const users = require("./routes/users");
const shows = require("./routes/shows");
app.use("/users", users);
app.use("/shows", shows);
const { db } = require('../db/connection');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("no likey");
});

module.exports = app