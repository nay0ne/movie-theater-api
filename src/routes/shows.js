const { Router } = require('express');
const router = Router();
const { Show } = require("../../models/index");

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
//  get shows of particular genre
router.get("/:genre", async (req, res, next) => {
    try {
        const genre = req.params.genre;
        const shows = await Show.findAll({
            where: {
                genre: genre
            } 
        })
        res.json(shows);
    } catch (error) {
        next(error)
    }
})

// add router.put to updating show rating

//  add router.put to update show status

router.delete("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const show = await Show.findByPk(id);
        show.slice(id, 1);
    } catch (error) {
        next(error);
    }
});

module.exports = router