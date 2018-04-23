const bcrypt = require('bcrypt');
const db = require('../config/connection.js');

function getAllDrugs () {
    return db.many(`
    SELECT * FROM drugs_comments
    `);
}

function getOneDrug(id) {
    return db.one(`
    SELECT * FROM drugs_comments
    WHERE drugs_comments.id = $1
    `, id);
}

function insertDrugs(id) {
  return db.one(`
    INSERT INTO drugs_comments (name, comment, consent)
    VALUES ($/name/, $/comment/, $/consent/)
    WHERE users_drugs.id = $1
    `, id);
}

function destroy(id) {
  return db.none(`
    DELETE FROM drugs_comments
    WHERE drugs_comments.id = $1
    RETURNING *
    `, id);
}

function updateDrugs(id) {
  return db.one(`
    UPDATE drugs_comments
    SET name = $/name/,
     comment = $/comment/,
     consent = $/consent/
    WHERE id = $/id/
    RETURNING *
    `, id);
}

module.exports = {
    getAllDrugs,
    getoneDrug,
    insertDrugs,
    destroy,
    updateDrugs
}
