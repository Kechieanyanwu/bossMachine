const express = require('express');
const apiRouter = express.Router();
const minionRouter = require("./minions");
// const {
//     createMeeting,
//     getAllFromDatabase,
//     getFromDatabaseById,
//     addToDatabase,
//     updateInstanceInDatabase,
//     deleteFromDatabasebyId,
//     deleteAllFromDatabase,
//   } = require("./db");

apiRouter.use("/minions", minionRouter);
//Useful space

// const getFromDatabaseById = (modelType, id) => {
//     const model = findDataArrayByName(modelType);
//     if (model === null) {
//       return null;
//     }
//     return model.data.find((element) => {
//       return element.id === id;
//     });
//   }


// Routes
// const minionPropCheck = (req, res, next) => { //to include in routes of minion put and post, and not mount on routes as this isnt needed for all routes to that location 
//     // check request object for existence of keys
//     const query = req.query;
//     console.log(query); //temporary for debugging
//     console.log(req.body); //debugging
//     if (("name" in query) && ("title" in query) && ("salary" in query ) && ("weaknesses" in query)) {
//         const minion = {}
//         minion.name = query.name;
//         minion.title = query.title;
//         minion.salary = query.salary;
//         minion.weaknesses = query.weaknesses;
//         req.minion = minion;
//         next();
//     } else {
//         const err = new Error("You must have a Name, Title, Salary, and Weakness");
//         err.status = 400;
//         next(err);
//     }
// }

// Minions 

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

//create error handler
const errorHandler = (err, req, res, next) => { //how to test this? Optional 
    const status = err.status;
    console.log(err.message); //temporary for error checks
    res.status(status).send(err.message)
}

apiRouter.use(errorHandler);