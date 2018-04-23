const drugsDb = require("../../models/User");

function addDrugs (req, res, next) {
  console.log('Adding to the drugs_comments');
  drugsDB.insertDrugs(id)
    .then(data => {
      res.locals.drugs = data;
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
    res.redirect(`/drugs/${req.body.id})
   })
   .catch(err => {err})
}

module.exports = {
  addDrugs,
  destroyDrug,
  updateDrug,
  editDrug
}
