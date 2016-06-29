const generators = require('yeoman-generator');
const _ = require('lodash');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);

    // And you can then access it later on this way; e.g. CamelCased
    this.appname = _.camelCase(this.appname);
  },

  prompting: function () {
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
      name    : 'authorName',
      message : 'Name of author or your name',
      default: ''
    }, {
      type    : 'input',
      name    : 'authorEmail',
      message : 'Name of author\'s email or your email',
      default: ''
    }, {
      type    : 'input',
      name    : 'authorUrl',
      message : 'Name of author\'s website or your website',
      default: ''
    }];
    return this.prompt(prompts).then(function(answers) {
      this.answers = answers;
    }.bind(this));
  },

  writing: {

    packageJSON: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.answers
      );
    },

    rootFiles: function () {
      this.fs.copy(
        this.templatePath('env.sample'),
        this.destinationPath('.env.sample')
      );

      this.fs.copy(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
      );

      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );

      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );

      this.fs.copy(
        this.templatePath('LICENSE'),
        this.destinationPath('LICENSE')
      );

      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md')
      );

      this.fs.copy(
        this.templatePath('Procfile'),
        this.destinationPath('Procfile')
      );
    },

    projectFiles: function () {
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

  },

  install: function () {
    this.npmInstall();
  }

});
