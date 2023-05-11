const { Router } = require('express');
const router = Router();
const User = require("../../models");

router.get("/", async (req, res, next) => {
   try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        res.json(user);
    } catch (error) {
        next(error);
    }
});

module.exports = router