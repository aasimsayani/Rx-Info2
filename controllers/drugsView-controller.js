function showDrugs(req, res) {
    res.render('drugs/drugs', {information: res.locals.drugs});
  };

function showForm(req, res) {
    res.render('drugs/drugs-add', {information: res.locals.newDrug});
  };

function showEditForm(req, res) {
    info = res.locals.drugs
    console.log(info)
    res.render('drugs/drugs-edit', {info: res.locals.drugs});
  };

function handleCreate(req, res) {
    res.render('drugs/drugs-add', {information: res.locals.newDrug});
    console.log(information)
  };

function handleExistingDrugs(req, res) {
    res.render('drugs/drugs-edit');
  };

function handleDelete(req, res){
    res.redirect('drugs/drugs')
  };



module.exports = {
    showDrugs,
    showForm,
    showEditForm,
    handleCreate,
    handleExistingDrugs,
    handleDelete
}
