const express = require('express');
const meetingsRouter = express.Router();
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require("./db");



// GET /api/meetings to get an array of all meetings.
meetingsRouter.get("/", (req, res, next) => {
    res.send(getAllFromDatabase("meetings"));
});

// POST /api/meetings to create a new meeting and save it to the database. 
// Server automatically generates meetings using CreateMeeting from db.js
meetingsRouter.post("/", (req, res, next) => {
    const newMeeting = createMeeting();
    addToDatabase("meetings", newMeeting);
    res.status(201).send(newMeeting); 
});

// DELETE /api/meetings to delete all meetings from the database.
meetingsRouter.delete("/", (req, res, next) => {
    const data = deleteAllFromDatabase("meetings");
    if (JSON.stringify(data) === JSON.stringify([])) {
        res.status(204).send();
    } else {
        res.status(400).send();
    }
});


module.exports = meetingsRouter;
