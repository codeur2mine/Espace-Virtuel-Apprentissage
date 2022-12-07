const express = require('express')
var mongoose = require('mongoose');

//middleware

const {notFound, errorHandler}= require("./Middlewares/errorMiddleware");

const app = express()
//Parser Data
const bodyParser = require('body-parser')
var session = require('express-session');
//Amorçage
const cors = require('cors');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passportLocalMongoose = require("passport-local-mongoose");
const db = process.env.mongoURI;

//Router
const userRoutes=require('./routes/userRoutes')


app.use(express.json());

app.use('/api/users', userRoutes);



//Mongoose
mongoose
  .connect("mongodb+srv://codeur2mine:FyHNvZpKIcCBcsHD@cluster0.zhvew.mongodb.net/eat?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected BD'))
  .catch(err => console.log(err));

app.use(session({
  name: 'session-id',
  secret: '123-456-789',
  saveUninitialized: false,
  resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

//ENDPOINT
app.use(cors({
  origin: 'http://localhost:3000'
}));
var User = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Sign Up Connect
// app.post('/signup', (req, res, next) => {
//   User.register(new User({
//     username: req.body.username
//   }),
//     req.body.password, (err, user) => {
//       if (err) {
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'application/json');
//         res.json({
//           err: err
//         });
//       } else {
//         passport.authenticate('local')(req, res, () => {
//           User.findOne({
//             username: req.body.username
//           }, (err, person) => {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json({
//               success: true,
//               status: 'Registration Successfull!',
//             });
//           });
//         })
//       }
//     })
// });

//Login connect
app.post('/login', passport.authenticate('local'), (req, res) => {
  User.findOne({
    username: req.body.username
  }, (err, person) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      success: true,
      status: 'You are successfully logged in!'
    });
  })
});

//log out Connect
app.post('/logout', (req, res, next) => {

  if (req.session) {
    req.logout();
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.clearCookie('session-id');
        res.json({
          message: 'You are successfully logged out!'
        });
      }
    });
  } else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});



app.get('/', (req, res) => {
  res.send('JE SUIS MOHAMED')
})

const port = 5000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// error Middleware
app.use(notFound);
app.use(errorHandler);

//Transactions

const path = require("path");
const transactionsRoutes = require("./routes/transactionRoutes");
const morgan = require("morgan");


// Morgan Config
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes transactions
app.use("/api/paiement", transactionsRoutes);

if (process.env.NODE.ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}




