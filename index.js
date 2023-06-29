const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installation instructions of your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What is the usage information of your project?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What is the contribution guidelines of your project?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What are the test instructions of your project?',
    name: 'tests',
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile("README.md", answers);
  })
  .catch((err) => {
    if(err.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log(err);
    }
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
