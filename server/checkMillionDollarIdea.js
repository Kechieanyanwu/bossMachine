const checkMillionDollarIdea = (req, res, next) => {
    const idea = req.body;
    const { numWeeks, weeklyRevenue } = idea;
    const totalValue = numWeeks * weeklyRevenue;
  
    // Case 1: Send a 400 error response if the total yield is less than one million dollars.
    if (!Number.isNaN(totalValue) && totalValue >= 1000000) {
      req.idea = idea;
      next();
    } else {
      // Case 2: Send a 400 error response if numWeeks or weeklyRevenue is not supplied.
      if (!numWeeks || !weeklyRevenue) {
        res.status(400).send("Both numWeeks and weeklyRevenue must be supplied.");
      } else {
        // Case 3: Send a 400 error response if numWeeks or weeklyRevenue is an invalid value.
        res.status(400).send("numWeeks and weeklyRevenue must be valid numbers.");
      }
    }
  };

module.exports = checkMillionDollarIdea;

// 13) is a function takes three arguments
// 14) sends a 400 error if the total yield is less than one million dollars
// 15) calls next for ideas that will yield at least one million dollars
// 16) sends a 400 error if numWeeks or weeklyRevenue is not supplied
// 17) sends a 400 error if numWeeks or weeklyRevenue is an invalid string




//refactor


  

// const checkMillionDollarIdea = (req, res, next) => {
//     const idea = req.body;
//     if ((idea.numWeeks * idea.weeklyRevenue) >= 1000000) {
//         req.idea = idea;
//         next(); 
//     } else {
//         const err = new Error("Must be worth atleast a milli");
//         err.status = 400;
//         next(err);
//     }
// }
