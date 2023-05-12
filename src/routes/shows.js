const { Router } = require('express');
const router = Router();
const { Show } = require("../../models/index");

router.get("/", async (req, res, next) => {
   try {
        const show = await Show.findAll();
        res.json(show);
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
//  get shows of particular genre- working
router.get("/:genres/:genre", async (req, res, next) => {
    try {
        const genre = req.params.genre;
        const show = await Show.findAll({where: {genre: genre} })
        res.json(show);
    } catch (error) {
        next(error)
    }
})
//  update 
router.put("/id", async (req, res, next) => {
    try {
        const id = req.params;
        const show = Show.findByPk(id);
        await Show.update(show, req.body);
        //  not working
    } catch (error) {
        
    }
})

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