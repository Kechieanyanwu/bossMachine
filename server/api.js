const express = require('express');
const apiRouter = express.Router();

// Routes
// Minions 
    // GET /api/minions to get an array of all minions. - function getAllFromDatabase
    // POST /api/minions to create a new minion and save it to the database. - Sends new resource in req body - function addToDatabase
    // GET /api/minions/:minionId to get a single minion by id. - function getFromDatabaseById
    // PUT /api/minions/:minionId to update a single minion by id. - Sends updated resource in req body - function updateInstanceInDatabase
    // DELETE /api/minions/:minionId to delete a single minion by id. - function deleteFromDatabasebyId

// Ideas
    // GET /api/ideas to get an array of all ideas. - function getAllFromDatabase
    // POST /api/ideas to create a new idea and save it to the database. - Sends new resource in req body - function addToDatabase
    // GET /api/ideas/:ideaId to get a single idea by id. - function getFromDatabaseById
    // PUT /api/ideas/:ideaId to update a single idea by id. - Sends updated resource in req body - function updateInstanceInDatabase
    // DELETE /api/ideas/:ideaId to delete a single idea by id. - function deleteFromDatabasebyId

// Meetings
    // GET /api/meetings to get an array of all meetings. - function getAllFromDatabase
    // POST /api/meetings to create a new meeting and save it to the database. - Server automatically generates meetings using CreateMeeting from db.js
    // DELETE /api/meetings to delete all meetings from the database. - function deleteAllFromDatabase


// Schemas
    // Minion:
        // id: string
        // name: string
        // title: string
        // salary: number
    // Idea
        // id: string
        // name: string
        // description: string
        // numWeeks: number
        // weeklyRevenue: number
    // Meeting
        // time: string
        // date: JS Date object
        // day: string
        // note: string








module.exports = apiRouter;

//Note to convert input from client to numbes and string

// Create custom middleware checkMillionDollarIdea