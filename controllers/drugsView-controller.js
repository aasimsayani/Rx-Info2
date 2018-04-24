// function showDrugs(req, res) {
//   console.log('I send successful responses');
//   res.render('drugs/drugs', {
//     information: res.locals.drugs
//   })
// }


// function showForm(req, res) {
//   res.render('drugs/drugs-edit', {
//     information: res.locals.drugs
//   })
// }

// function showEditForm(req, res) {
//   information = res.locals.newDrugs
//   res.redirect(`drugs/drugs-edit/${drugs.id}`);
// }

// function handleCreate (req, res) {
//   res.render('drugs/drugs-add', {
//     information: res.locals.newDrugs,
//   })
// }


// function handleExistingDrugs(req, res) {
//   information = res.locals.drugs;
//   res.render(`drugs/drugs-edit`, {
//     information: res.locals.drugs
//   })
// }


// function handleDelete(req, res) {
//   res.redirect(`drugs/drugs`);
// }


function showDrugs(req, res) {
    res.render('drugs/drugs', {information: res.locals.drugs});
  };

function showForm(req, res) {
    res.render('drugs/drugs-add');
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
