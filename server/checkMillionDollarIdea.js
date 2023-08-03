const checkMillionDollarIdea = (idea) => { //do i include req and res object? or just return an error if not
    if ((idea.numWeeks * idea.weeklyRevenue) >= 1000000) {
        return idea; 
    } else {
        return false;
    }
};

module.exports = checkMillionDollarIdea;
