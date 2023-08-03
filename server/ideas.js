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
const checkMillionDollarIdea = require("./checkMillionDollarIdea");


ideasRouter.param("ideaId", (req, res, next, id) => {
  const idea = getFromDatabaseById("ideas", id);
  if (idea) {
    req.idea = idea;
    req.id = id;
    next();
  } else {
    const err = new Error("Invalid Idea ID");
    err.status = 400;
    next(err); 
  }
});


// GET /api/ideas to get an array of all ideas.
ideasRouter.get("/", (req, res, next) => {
  res.send(getAllFromDatabase("ideas"));
})

// POST /api/ideas to create a new idea and save it to the database.
ideasRouter.post("/", (req, res, next) => {
  const idea = checkMillionDollarIdea(req.body); //check where else is used
  if (idea) {
    const savedIdea = addToDatabase("ideas", idea); 
    res.status(201).send(savedIdea);
  } else {
    res.status(400).send()
  }
});
    
// GET /api/ideas/:ideaId to get a single idea by id.
ideasRouter.get("/:ideaId", (req, res, next) => {
  res.status(200).send(req.idea);
});
  
// PUT /api/ideas/:ideaId to update a single idea by id. 
ideasRouter.put("/:ideaId", (req, res, next) => {
  const idea = checkMillionDollarIdea(req.body); //check where else is used
  updatedIdea = updateInstanceInDatabase("ideas", idea);
  res.status(200).send(updatedIdea);
});
    
// DELETE /api/ideas/:ideaId to delete a single idea by id.
ideasRouter.delete("/:ideaId", (req, res, next) => { //need to add button for deleting in future updates
  const deleted = deleteFromDatabasebyId("ideas", req.id);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(400).send();
  }
}); 


const errorHandler = (err, req, res, next) => {
  res.status(err.status).send(err.message);
}

ideasRouter.use(errorHandler);

module.exports = ideasRouter;