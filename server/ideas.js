const express = require('express');
const ideasRouter = express.Router();
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require("./db");

  // Ideas
    // GET /api/ideas to get an array of all ideas. - function getAllFromDatabase
    // POST /api/ideas to create a new idea and save it to the database. - Sends new resource in req body - function addToDatabase
    // GET /api/ideas/:ideaId to get a single idea by id. - function getFromDatabaseById
    // PUT /api/ideas/:ideaId to update a single idea by id. - Sends updated resource in req body - function updateInstanceInDatabase
    // DELETE /api/ideas/:ideaId to delete a single idea by id. - function deleteFromDatabasebyId

        // Idea
        // id: string
        // name: string
        // description: string
        // numWeeks: number
        // weeklyRevenue: number