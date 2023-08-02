const express = require('express');
const apiRouter = express.Router();
const minionRouter = require("./minions");
const meetingsRouter = require("./meetings");

apiRouter.use("/minions", minionRouter);
apiRouter.use("/meetings", meetingsRouter);

module.exports = apiRouter;

const errorHandler = (err, req, res, next) => { //how to test this? Optional 
    const status = err.status;
    console.log(err.message); //temporary for error checks
    res.status(status).send(err.message)
}

apiRouter.use(errorHandler);