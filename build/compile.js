'use strict';

require('dotenv').config({silent: true});

if (process.env.NODE_ENV !== 'production') {
  process.exit(0);
}

const compile = process.env.COMPILER || 'heroku';

module.exports = require(`./${compile}.config`);
