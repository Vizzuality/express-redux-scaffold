'use strict';

const _ = require('lodash');
const generators = require('yeoman-generator');

class RailsGenerator extends generators.Base {

  prompting() {
    const prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
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

    this.fs.copy(
      this.templatePath('ruby-version'),
      this.destinationPath('.ruby-version')
    );

    this.fs.copy(
      this.templatePath('rbenv-gemsets'),
      this.destinationPath('.rbenv-gemsets')
    );

    this.fs.copy(
      this.templatePath('Gemfile'),
      this.destinationPath('Gemfile')
    );

    this.fs.copy(
      this.templatePath('Gemfile.lock'),
      this.destinationPath('Gemfile.lock')
    );

    this.fs.copy(
      this.templatePath('config.ru'),
      this.destinationPath('config.ru')
    );

    this.fs.copy(
      this.templatePath('Rakefile'),
      this.destinationPath('Rakefile')
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.answers
    );

    // Project directories
    this.fs.copy(
      this.templatePath('app'),
      this.destinationPath('app')
    );
    this.fs.copy(
      this.templatePath('bin'),
      this.destinationPath('bin')
    );
    this.fs.copy(
      this.templatePath('db'),
      this.destinationPath('db')
    );
    this.fs.copy(
      this.templatePath('lib'),
      this.destinationPath('lib')
    );
    this.fs.copy(
      this.templatePath('log'),
      this.destinationPath('log')
    );
    this.fs.copy(
      this.templatePath('tmp'),
      this.destinationPath('tmp')
    );
    this.fs.copy(
      this.templatePath('public'),
      this.destinationPath('public')
    );
    this.fs.copy(
      this.templatePath('vendor'),
      this.destinationPath('vendor')
    );
    this.fs.copy(
      this.templatePath('config'),
      this.destinationPath('config')
    );

    this.fs.copyTpl(
      this.templatePath('config/application.rb'),
      this.destinationPath('config/application.rb'),
      {className: _.capitalize(this.answers.name)}
    );

    this.fs.copyTpl(
      this.templatePath('config/database.yml'),
      this.destinationPath('config/database.yml'),
      this.answers
    );
  }

}

module.exports = RailsGenerator;
