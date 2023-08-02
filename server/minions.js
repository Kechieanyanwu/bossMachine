const express = require('express');
const minionRouter = express.Router();
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
    validateMinionId,
  } = require("./db");


minionRouter.param("minionId", (req, res, next, id) => {
    const minionId = id;
    console.log(`MinionId: ${minionId} of type ${typeof(minionId)}`); //debug
    const minion = validateMinionId(minionId);
    console.log(`The response object is ${JSON.stringify(minion)}`); //debug
    if (minion) {
        req.id = minionId;
        console.log("You have reached the if minion section"); //debug
        next();
    } else {
        const err = new Error("Param error Minion Id invalid"); //debug take out param error
        err.status = 400;
        next(err);
    }
})  



// GET /api/minions to get an array of all minions. - function getAllFromDatabase
minionRouter.get("/", (req, res, next) => {
    console.log("You have reached the Get All Minions endpoint"); //testing 
    res.status(200).send(getAllFromDatabase("minions"))
});


// POST /api/minions to create a new minion and save it to the database. - Sends new resource in req body - function addToDatabase 
minionRouter.post("/", (req, res, next) => { 
    try{
        console.log(`The request body is ${JSON.stringify(req.body)}`); //debug
        const newMinion = addToDatabase("minions", req.body);
        console.log(`The response is ${JSON.stringify(newMinion)}`) //debug
        res.status(201).send(newMinion);

    } catch(err) {
        err.status = 400; //bad request because invalid minion syntax
        next(err) //to include error handler
    }
})


// GET /api/minions/:minionId to get a single minion by id. - function getFromDatabaseById
minionRouter.get("/:minionId", (req, res, next) => {
    console.log("You have reached the get by minion id router, with req.id of " + req.id); //debug
    const minion = getFromDatabaseById("minions", req.id);
    res.status(200).send(minion);
});

// PUT /api/minions/:minionId to update a single minion by id. - Sends updated resource in req body - function updateInstanceInDatabase
// DELETE /api/minions/:minionId to delete a single minion by id. - function deleteFromDatabasebyId



module.exports = minionRouter;