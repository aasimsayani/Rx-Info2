// initially required bcrypt because I thought I would be able to connect UserAuth and drugs
const bcrypt = require('bcrypt');
// this const db is connecting the database to this query page
const db = require('../config/connection.js');

// these are all function being used to call SQL queries to search the database
function getAllDrugs() {
    return db.any(`
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
    WHERE drugs_comments.id = $1
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
    getOneDrug,
    insertDrugs,
    destroy,
    updateDrugs
}
