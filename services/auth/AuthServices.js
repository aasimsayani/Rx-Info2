
// //bcrypt will be used to hash the plain text password (register phase) and compare password_digest (login phase)
const bcrypt = require('bcrypt');

// //import User model functions, allowing us to crete User database and retrieve user from database
const UserDb = require("../../models/User");
const saltRounds = 10;

function login(req, res, next) {
    let user;
    const loginAttempt = {
        user_name: req.body.user_name,
        email: req.body.email,
        pass_word: req.body.pass_word
      }
  UserDb.findUser(loginAttempt.user_name)
    .then(userInfo => {
      user = userInfo
      return bcrypt.compare(loginAttempt.pass_word, hash)
      })
    .then(isValidPass => {
        if (!isValidPass) {
            throw {
            message: 'Invalid Password'
            }
        }
        console.log(user)
        req.session.user = user;
        next();
    })
    .catch(err => {
      next(err);
    })

}

function logout(req, res, next) {
//   // destroy session
//   // next will be called with either an error or undefined.
//   // (negative or positive path)
  req.session.destroy(err => next(err));
}

function register(req, res, next) {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hash(req.body.password, salt)
  const user = {
    user_name: req.body.user_name,
    pass_word: hash,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    drugs_taken: req.body.drugs_taken

  }

  UserDb.createUser(user)
    .then(user => {
      if (!user) {
        throw {
          message: 'Incorrect password'
        }
      }

      req.session.user = user;
      next();
    })
    .catch(err => {
      next(err);
    })
}



module.exports = {
  login,
  logout,
  register,
  loginRequired: [
    /* this is either going to resolve to next(false) or next(null) */
    (req, res, next) => next(!req.session.user || null),
    (err, req, res, next) => res.sendStatus(401),
  ]
}
