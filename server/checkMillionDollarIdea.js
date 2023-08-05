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

