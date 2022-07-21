const express = require('express');
const cors = require("cors");
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// enabling cors for all requests by using cors middleware
app.use(cors());
// Enable pre-flight
app.options("*", cors());

routes(app);

module.exports = app;