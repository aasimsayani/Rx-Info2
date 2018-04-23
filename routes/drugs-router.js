const drugsRouter = require('express').Router();
const drugsViewController = require('../controllers/drugsView-controller')

drugsRouter.get('/', drugsViewController.showNewDrugForm);

drugsRouter.post('/:id', drugsViewController.handleExistingDrugs);

// drugRouter.put('/drugs/:id')










module.exports = drugsRouter


