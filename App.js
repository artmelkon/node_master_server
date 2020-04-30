//  source code https://github.com/paulmillr/chokidar
const path = require('path');
const Joi = require('joi');
const chokidar = require('chokidar');
const express = require('express');
const app = express();

const eventWatcher = require('./service/folder-event-listener');

eventWatcher();

// One-liner for current directory

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Node Server connected successfully on Port: ${PORT}`));