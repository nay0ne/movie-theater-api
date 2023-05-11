const { Router } = require('express');
const router = Router();
const Show = require("../../models");

router.get("/", async (req, res, next) => {
   try {
        const shows = await Show.findAll();
        res.json(shows);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const show = await Show.findByPk(id);
        res.json(show);
    } catch (error) {
        next(error);
    }
});

module.exports = router