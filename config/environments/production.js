'use strict';

const express = require('express');
const indexPath = path.join(process.cwd(), 'dist/index.html');

module.exports = function(app) {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(indexPath);
  });
};
