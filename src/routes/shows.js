const { Router } = require('express');
const router = Router();
const Show = require("../../models/index");

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
//  genre needs a {where:}
router.get("/:genre", async (req, res, next) => {
    try {
        const genre = req.params.genre;
        const shows = await ShowfindAll()
    } catch (error) {
        next(error)
    }
})

module.exports = router