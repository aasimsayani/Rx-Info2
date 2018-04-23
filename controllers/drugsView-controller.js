function showDrugs(req, res) {
    res.render('users/drugs');
  };

function handleCreate(req, res) {
    res.render('users/drugs-add')
  };

function handleExistingDrugs(req, res) {
    res.render('users/drugs-edit');
  };

function handleDelete(req, res){
    res.redirect('users/drugs')
  };



module.exports = {
    showDrugs,
    handleCreate,
    handleExistingDrugs,
    handleDelete
}
