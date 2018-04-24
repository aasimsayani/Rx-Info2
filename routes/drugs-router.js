const drugsRouter = require('express').Router();
const drugsViewController = require('../controllers/drugsView-controller')
const drugsController = require('../controllers/drugs-controller.js')
const drugsDb = require('../models/Drugs.js');

// drugsRouter.route('/')
//   .get(drugsController.index, drugsViewController.showDrugs)
//   .post(drugsController.addDrugs, drugsViewController.showEditForm)

// drugsRouter.route('/drugs-add')
//   .get(drugsController.findDrugs, drugsViewController.handleCreate)

// drugsRouter.route('/drugs-edit/:id')
//   .get(drugsController.findDrugs, drugsViewController.showEditForm)
//   .put(drugsController.updateDrug)
//   .delete(drugsController.destroyDrug, drugsViewController.handleDelete)


drugsRouter.route('/')
.get( drugsController.index, drugsViewController.showDrugs);


drugsRouter.route('drugs/drugs-add')
.get( drugsViewController.showForm)
.post( drugsController.addDrugs, drugsViewController.handleCreate);

drugsRouter.route('drugs/drugs-edit/:id')
.get(drugsController.findDrugs, drugsViewController.showEditForm)
.put(drugsController.updateDrug)
.delete(drugsController.destroyDrug, drugsViewController.handleDelete);

// .post( drugsController.addDrugs, drugsViewController.handleCreate);

// drugsRouter.route('/drugs-edit/:id')

// displays the error that is being created or Error handler
function displayError(err, req, res, next) {
  res.status(500).json({
    status: 'error',
    message: err.message
  })
};

module.exports = drugsRouter


