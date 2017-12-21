// Server setup/dependencies
require('dotenv').config();
const express = require('express');
const server = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// database setup
const dbconfig = require('./knexfile.js')[process.env.DB_ENV];
const knex = require('knex')(dbconfig);

// Routes
const socketRouter = require('./routes/battles_routes')(server);
const monsterRouter = require('./routes/monster_routes')(knex);

// Functions
const loginUser = require('./lib/login_user');
const registerUser = require('./lib/register_user');

// Middleware
server.use(bodyParser.urlencoded({ extended: false }));
// This is required to parse POST fetch requests for the store
server.use(bodyParser.json());
server.use(cookieParser());

// Default room for testing.
socketRouter.genBattle('1');

server.use('/battles', socketRouter);
server.use('/monsters', monsterRouter);

server.post('/login', (req, res) => {
  loginUser(res, req.body.email, req.body.password);
});
server.post('/users', (req, res) => {
  registerUser(res, req.params.email,req.params.password);
});

// Give the place money
server.patch('/users/:id', (req, res) => {
  console.log(req.body.money);
  res.status(204).send();
});

server.listen(PORT, '0.0.0.0', 'localhost', () => {
  console.log(`Listening on ${PORT}`);
});
