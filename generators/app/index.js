'use strict';

const generators = require('yeoman-generator');

class Generator extends generators.Base {

  prompting() {
    const prompts = [{
      type: 'list',
      name: 'technology',
      choices: ['express', 'rails'],
      message: 'Select base technology',
      default: 'express'
    }];
    return this.prompt(prompts).then(answers => {
      this.composeWith(`vizzuality-projects:${answers.technology}`);
    });
  }

}

module.exports = Generator;
