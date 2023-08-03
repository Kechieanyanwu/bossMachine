const express = require('express');
const minionRouter = express.Router();
const workRouter = require("./work");
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



minionRouter.param("minionId", (req, res, next, id) => { //Change this to just use get from db by id
    const minionId = id;
    const minion = validateMinionId(minionId);
    if (minion) {
        req.minion = minion; 
        req.id = minionId;
        next();
    } else {
        const err = new Error("Minion Id invalid"); 
        err.status = 404;
        next(err);
    }
})  

minionRouter.use("/:minionId/work", workRouter);


// GET /api/minions to get an array of all minions. 
minionRouter.get("/", (req, res, next) => {
    res.send(getAllFromDatabase("minions"))
});


// POST /api/minions to create a new minion and save it to the database. 
minionRouter.post("/", (req, res, next) => {
    const newMinion = addToDatabase("minions", req.body);
    if (newMinion) {
        res.status(201).send(newMinion);
    } else {
        res.status(400).send();
    }
})

// GET /api/minions/:minionId to get a single minion by id.
minionRouter.get("/:minionId", (req, res, next) => {
    const minion = getFromDatabaseById("minions", req.id);
    console.log("test");
    res.status(200).send(minion);
});

// PUT /api/minions/:minionId to update a single minion by id. 
minionRouter.put("/:minionId", (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase("minions", req.body);
    if (updatedMinion) {
        res.send(updatedMinion);
    } else {
        res.status(400).send();
    }
});

// DELETE /api/minions/:minionId to delete a single minion by id. 
minionRouter.delete("/:minionId", (req, res, next) => {
    const deleted = deleteFromDatabasebyId("minions", req.id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(400).send();
    }
})

const errorHandler = (err, req, res, next) => {
    res.status(err.status).send(err.message);
  }
  
minionRouter.use(errorHandler);


module.exports = minionRouter;
