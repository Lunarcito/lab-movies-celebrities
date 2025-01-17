const router = require("express").Router();

// all your routes here

const Celebrity = require ("../models/Celebrity.model")

router.get("/", async (req,res)=>{
    try{
        const celebrities = await Celebrity.find({})
        res.render("../views/celebrities/celebrities",{celebrities})
    } catch (err){      
        console.log (err)
    }
})

router.get("/create", (req, res) => {
    res.render("../views/celebrities/new-celebrity")
  })
  
  router.post("/create", async (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    try {
        const celebrity = await Celebrity.create(req.body)
        console.log("Celebrity created")
        res.redirect("/")
    } catch (err) {
        console.log(err)
    }
  })

module.exports = router;