const router = require("express").Router();

// all your routes here

const Movie = require ("../models/Movie.model")

router.get("/", async (req,res)=>{
    try{
        const movies = await Movie.find({})
        res.render("../views/movies/movies",{movies})
    } catch (err){
        console.log (err)
    }
})

router.get("/create", (req, res) => {
    res.render("../views/movies/new-movies")
  })
  
  router.post("/create", async(req, res) => {
    const {title, genre, plot, cast} = req.body;
    try {
        await Movie.create(req.body)
        console.log("Movie created")
        res.redirect("/movies")
    } catch (err) {
        console.log(err)
    }
  })

module.exports = router;