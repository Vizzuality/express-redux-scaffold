'use strict';

const generators = require('yeoman-generator');

class Generator extends generators.Base {

  writing() {
    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copyTpl(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE'),
      {year: new Date().getFullYear()}
    );
    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    );
  }

}

module.exports = Generator;
