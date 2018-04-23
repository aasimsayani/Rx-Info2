const bcrypt = require('bcrypt');
const db = require('../config/connection.js');

// findUser = (user_name) =>{
//     const queryPromise = db.one(`
//         SELECT *
//         FROM users
//         WHERE  user_name = $1
//         `, user_name)
//     return queryPromise;
// };

createUser = (user) => {
    const queryPromise = db.one(`
    INSERT INTO users (user_name,  pass_word, email, firstname, lastname, drugs_taken)
    VALUES ($/user_name/, $/pass_word/, $/email/, $/firstname/, $/lastname/, $/drugs_taken/)
    RETURNING *
    `, user
  );
  return queryPromise;
};

// module.exports = {
//     findUser,
//     createUser
// }



 findUser = (id) => {
    return db.one(`
    SELECT * FROM users
    WHERE user_name = $1
    `, id);
};

// createUser = (user) => {
//     const queryPromise = db.one(`
//     INSERT INTO users (user_name,  pass_word, email, firstname, lastname, drugs_taken)
//     VALUES (${user_name}, ${pass_word}, ${email}, ${firstname}, ${lastname}, ${drugs_taken})
//     RETURNING *
//     `, user);
//     return queryPromise;
// };

updateUser = (user) => {
    return db.one(`
      UPDATE users
      SET
      user_name = $/user_name/,
      pass_word = $/pass_word/,
      email = $/email/,
      firstname = $/firstname/,
      lastname = $/lastname/,
      WHERE users.user_id = $1
      `, user)
}

// destroy = (id) => {
//   return db.none(`

//     `)
// }

module.exports = {
    findUser,
    createUser,
    updateUser
}
