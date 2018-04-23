const db = require('../config/connection.js');

function getAllDrugs () {
    return db.all(`
    SELECT * FROM drugs
    `);
}

function getOneDrug(id) {
    return db.one(`
    SELECT * FROM drugs
    WHERE drugs.drug_id = $1
    `, id);
}

module.exports = {
    getAllDrugs,
    getoneDrug
}
