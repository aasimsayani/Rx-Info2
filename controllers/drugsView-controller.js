function showNewDrugForm(req, res) {
    res.render('users/drugs');
  };

function handleExistingDrugs(req, res) {
    res.render('users/drugs-edit');
}



module.exports = {
    showNewDrugForm,
    handleExistingDrugs
}
