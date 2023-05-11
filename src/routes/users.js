const { Router } = require('express');
const app = require('../app');
const router = express.Router();
const User = require("../../models");

router.get("/users", async (req, res, next) => {
   try {
        const users = await User.findall();
        res.json(users);
    } catch(error) {
        next(error);
    }
});

router.get("/users/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        user = await Show.findByPk(id);
        res.json(user);
    } catch(error) {
        next(error);
    }
});