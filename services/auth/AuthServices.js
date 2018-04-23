
// //bcrypt will be used to hash the plain text password (register phase) and compare password_digest (login phase)
const bcrypt = require('bcrypt');

// //import User model functions, allowing us to crete User database and retrieve user from database
const UserDb = require("../../models/User");
const saltRounds = 10;

function login(req, res, next) {
    let user;
    const loginAttempt = {
      user_name: req.body.uname,
      email: req.body.email,
      password: req.body.password
    }

         // res.locals.user_name= req.body.user_name,
         // res.locals.email= req.body.email,
         // res.locals.pass_word= req.body.pass_word

      console.log('This is capturing the username', loginAttempt.user_name);
  UserDb.findUser(loginAttempt.user_name)
    .then(userInfo => {
      user = userInfo
      return bcrypt.compareSync(loginAttempt.password, userInfo.pass_word)
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

async function register(req, res, next) {
  // const salt = await bcrypt.genSaltSync(saltRounds);
  // const hash =
  const user = {
    user_name: req.body.user_name,
    pass_word: await bcrypt.hash(req.body.pass_word, 5),
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    drugs_taken: req.body.drugs_taken

  }
console.log(user);
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
