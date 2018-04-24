const drugsDb = require("../models/Drugs");

function index(req, res, next) {
  drugsDb.getAllDrugs()
  .then(data => {
    // console.log(data)
    res.locals.drugs = data
    next();
  })
  .catch(err => {
    next(err);
  })
}

function findDrugs(req, res, next) {
  drugsDb.getOneDrug(req.params.id)
  .then(data => {
    res.locals.drugs = data
    next();
  })
  .catch(err => {
    next(err)
  })
}

function addDrugs (req, res, next) {
  console.log('Adding to the drugs_comments');
  drugsDb.insertDrugs(req.params.id)
    .then(data => {
      res.locals.newDrug = data;
      next();
    })
    .catch(err => {
      next(err);
    })
}

function destroyDrug(req, res) {
  drugsDb.destroy(req.params.id)
  .then(() => {
    res.redirect('/drugs');
  })
  .catch(err => {
    res.status(500).json({err})
  })
}

function updateDrug(req, res) {
  req.body.id = req.params.id;
  drugsDB.updateDrugs(req.body.id)
   .then(data => {
    res.redirect(`/drugs/drugs-edit/${req.body.id}`)
   })
   .catch(err => {err})
}

module.exports = {
  index,
  addDrugs,
  findDrugs,
  destroyDrug,
  updateDrug,
}
