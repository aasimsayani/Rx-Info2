
// //bcrypt will be used to hash the plain text password (register phase) and compare password_digest (login phase)
const bcrypt = require('bcrypt');

// //import User model functions, allowing us to crete User database and retrieve user from database
const UserDb = require("../../models/User");
// const saltRounds = 10;

// function for logging in
function login(req, res, next) {
    // assigning a user
    let user;
    // storing this as an object to utilize below in calling them from the request {i.e. req.body}
    const loginAttempt = {
      user_name: req.body.uname,
      email: req.body.email,
      password: req.body.password
    }

         // res.locals.user_name= req.body.user_name,
         // res.locals.email= req.body.email,
         // res.locals.pass_word= req.body.pass_word
      console.log('This is capturing the username', loginAttempt.user_name);
  // searching the database for the user utilizing the query in the models
  UserDb.findUser(loginAttempt.user_name)
    .then(userInfo => {
      user = userInfo
      //comparing passwords with the one provided to see if there is any existing user in the database
      return bcrypt.compareSync(loginAttempt.password, userInfo.pass_word)
      })
      // utilizing a promise to show an error if there is not a valid password otherwise req.session is recording the user
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
//  session end

  req.session.destroy(err => next(err));
}

// utilizing async and await to create asynchronous code that will wait for a particular process to complete where it says await
async function register(req, res, next) {
  // const salt = await bcrypt.genSaltSync(saltRounds);
  // const hash =
  const user = {
    // establishing all aspects of the user
    user_name: req.body.user_name,
    // hashing the password
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
    // still trying to figure out what this does just saw it at the bottom of other examples so kept it
    (req, res, next) => next(!req.session.user || null),
    (err, req, res, next) => res.sendStatus(401),
  ]
}
