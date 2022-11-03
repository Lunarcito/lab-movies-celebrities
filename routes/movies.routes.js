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
    res.render("../views/movies/new-movie")
  })
  
  router.post("/create", async(req, res) => {
    const {title, genre, plot, cast} = req.body;
    try {
        const movie = await Movie.create(req.body)
        res.redirect("/")
    } catch (err) {
        console.log(err)
    }
  })


router.get("/:movieId", async (req, res) => {
    const movieId = req.params.movieId
    try {
      const movie = await Movie.findById(movieId)
      res.render("movies/movie-details", movie)
    } catch (err) {
      console.log(err)
    }
  })

  router.post("/:movieId/delete", async (req, res) => {
    const movieId = req.params.movieId
    try {
      const movie = await Movie.findByIdAndDelete(movieId)
      res.redirect("/")
    } catch (err) {
      console.log(err)
    }
  })


  router.get("/:movieId/edit", async (req, res) => {
    const movieId = req.params.movieId;
    try{
      console.log("ERROR")
      const editMovie =  await Movie.findById(movieId)
      res.render("movies/edit-movie", editMovie)
    }catch (error){
      
    }
  })
  
  router.post("/:movieId/edit", async(req, res) => {
    const {title, genre, plot, cast} = req.body;
    const movieId= req.params.movieId
    try {
        const movieEdited = await Movie.findByIdAndUpdate(movieId, req.body)
        console.log("Movie edited")
        res.redirect(`/movies/${movieId}`)
    } catch (err) {
        console.log(err)
        
    }
  })


module.exports = router;

