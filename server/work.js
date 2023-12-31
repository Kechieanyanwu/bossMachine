const express = require('express');
const workRouter = express.Router();
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



workRouter.param("workId", (req, res, next, workId) => {

    console.log(req.id);
    const minionId = req.body.minionId || req.id;
    const minion = validateMinionId(minionId);
    if (minion){
        const work = getFromDatabaseById("work", workId);
        if (work) {
            req.work = work;
            req.workId = workId;
            next();
        } else {
            const err = new Error("Invalid Id");
            err.status = 400;
            next(err);
            }
    } else {
        res.status(400).send("Invalid Minion ID"); //remove pt 2
    }
});

// GET /api/minions/:minionId/work to get an array of all work for the specified minion.
workRouter.get("/", (req, res, next) => {
    const allWork = getAllFromDatabase("work");
    let response = []
    for (work in allWork) {
        if (allWork[work].minionId === req.id){
            response.push(allWork[work]);
        }
    }
    res.send(response);
    });


// GET /api/minions/:minionId/work/:workId to get an array of all work for the specified minion.
workRouter.get("/:workId", (req, res, next) => {
    const work = getFromDatabaseById("work", req.workId);
    res.status(200).send(work);
});

// POST /api/minions/:minionId/work to create a new work object and save it to the database.
workRouter.post("/", (req, res, next) => {
    const work = req.body
    const savedWork = addToDatabase("work", work);
    if (savedWork) {
        res.status(201).send(savedWork);
    } else {
        res.status(400).send();
    }
});


// PUT /api/minions/:minionId/work/:workId to update a single work by id.
workRouter.put("/:workId", (req, res, next)=> {
    const updatedWork = updateInstanceInDatabase("work", req.body);
    if (updatedWork) {
        res.send(updatedWork);
    } else {
        res.status(400).send();
    }
});

// DELETE /api/minions/:minionId/work/:workId to delete a single work by id.
workRouter.delete("/:workId", (req, res, next) => {
    const deleted = deleteFromDatabasebyId("work", req.workId);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(400).send();
    }
});

const errorHandler = (err, req, res, next) => {
    res.status(err.status).send(err.message);
  }
  
workRouter.use(errorHandler);

module.exports = workRouter;
