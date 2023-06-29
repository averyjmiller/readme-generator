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
  {
    type: 'list',
    message: 'What is the licensing of your project?',
    name: 'license',
    choices: [
      'No license',
      'Academic Free License v3.0',
      'Apache license 2.0',
      'Artistic license 2.0',
      'Boost Software License 1.0',
      'BSD 2-clause',
      'BSD 3-clause',
      'BSD 3-clause Clear license',
      'BSD Zero-Clause license',
      'Creative Commons license family',
      'Creative Commons Zero v1.0 Universal',
      'Creative Commons Attribution 4.0',
      'Creative Commons Attribution Share Alike 4.0',
      'Do What The F*ck You Want To Public License',
      'Educational Community License v2.0',
      'Eclipse Public License 1.0',
      'Eclipse Public License 2.0',
      'European Union Public License 1.1',
      'GNU Affero General Public License v3.0',
      'GNU General Public License family',
      'GNU General Public License v2.0',
      'GNU General Public License v3.0',
      'GNU Lesser General Public License family',
      'GNU Lesser General Public License v2.1',
      'GNU Lesser General Public License v3.0',
      'ISC',
      'LaTeX Project Public License v1.3c',
      'Microsoft Public License',
      'MIT',
      'Mozilla Public License 2.0',
      'Open Software License 3.0',
      'PostgreSQL License',
      'SIL Open Font License 1.1',
      'University of Illinois/NCSA Open Source License',
      'The Unlicense',
      'zLib License'
    ],
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log('Success!')
  );
}

function init() {
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
}

init();