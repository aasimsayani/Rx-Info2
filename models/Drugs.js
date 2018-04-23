const bcrypt = require('bcrypt');
const db = require('../config/connection.js');

function getAllDrugs () {
    return db.many(`
    SELECT * FROM drugs
    `);
}

function getOneDrug(id) {
    return db.one(`
    SELECT * FROM drugs_comments
    WHERE drugs_comments.id = $1
    `, id);
}

function getComment(id) {
  return db.one(`
    SELECT comments FROM users_drugs
    WHERE users_drugs.id = $1
    `, id);
}

function addComment(id) {
  return db.one(`
    INSERT INTO user_drugs (comments)
    VALUES ($/comments/)
    WHERE users_drugs.user_id = $1
    RETURNING *
    `, id);
}

module.exports = {
    getAllDrugs,
    getoneDrug
}
