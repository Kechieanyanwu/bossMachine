const express = require('express');
const apiRouter = express.Router();
const minionRouter = require("./minions");
const meetingsRouter = require("./meetings");
const ideasRouter = require("./ideas");


apiRouter.use("/minions", minionRouter);
apiRouter.use("/meetings", meetingsRouter);
apiRouter.use("/ideas", ideasRouter);


module.exports = apiRouter;
