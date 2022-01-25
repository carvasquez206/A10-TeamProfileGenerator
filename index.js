/* Node Modules */
const inquirer = require('inquirer');
const Manager = require('');
const Engineer = require('');
const Intern = require('');
const fs = require('fs');

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });