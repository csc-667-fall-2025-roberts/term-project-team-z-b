import express from "express";

const router = express.Router();

router.get("/", (_request, response) =>{
    response.render("root", {gamesListing: ["a", "b", "c", "ect"] });
})

export default router;



