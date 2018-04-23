const drugsRouter = require('express').Router();
const drugsViewController = require('../controllers/drugsView-controller')
const drugsController = require('../controllers/drugs-controller.js')

drugsRouter.route('/')
.get( drugsViewController.showNewDrugForm);

drugsRouter.route('/:id')
.put(drugsViewController.showNewDrugForm);
.delete(drugsController.destroyDrug)

// drugRouter.put('/drugs/:id')










module.exports = drugsRouter


