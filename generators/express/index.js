'use strict';

const generators = require('yeoman-generator');

class ExpressGenerator extends generators.Base {

  prompting() {
    const prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, {
      type    : 'input',
      name    : 'version',
      message : 'Write project version',
      default: '1.0.0'
    }, {
      type    : 'input',
      name    : 'description',
      message : 'Write a description',
      default: ''
    }, {
      type    : 'input',
      name    : 'repository',
      message : 'Url of your repository',
      default: `https://github.com/Vizzuality/${this.appname}.git`
    }];
    return this.prompt(prompts).then(function(answers) {
      this.answers = answers;
    }.bind(this));
  }

  writing() {
    // Root files
    this.fs.copy(
      this.templatePath('env.sample'),
      this.destinationPath('.env.sample')
    );

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.answers
    );

    this.fs.copy(
      this.templatePath('Procfile'),
      this.destinationPath('Procfile')
    );

    // Package JSON
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.answers
    );

    // Project files
    this.fs.copy(
      this.templatePath('app'),
      this.destinationPath('app')
    );

    this.fs.copy(
      this.templatePath('public'),
      this.destinationPath('public')
    );

    this.fs.copy(
      this.templatePath('config'),
      this.destinationPath('config')
    );

    this.fs.copy(
      this.templatePath('server.js'),
      this.destinationPath('server.js')
    );

    this.mkdir('test');
  }

  install() {
    this.npmInstall();
  }

};

module.exports = ExpressGenerator;
