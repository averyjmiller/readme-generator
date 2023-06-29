const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description'
  },
  {
    type: 'input',
    message: 'What are the installation instructions of your project?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What is the usage information of your project?',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'What is the contribution guidelines of your project?',
    name: 'contributing'
  },
  {
    type: 'input',
    message: 'What are the test instructions of your project?',
    name: 'tests'
  },
  {
    type: 'list',
    message: 'What is the licensing of your project?',
    name: 'license',
    choices: [
      {
        name: 'None',
        value: null,
      },
      {
        name: 'Apache license 2.0',
        value: { 
          SPDX_ID:'Apache-2.0', 
          badge_ID: 'Apache_2.0-yellowgreen'
        }
      },
      {
        name: 'Boost Software License 1.0',
        value: {
          SPDX_ID: 'BSL-1.0',
          badge_ID: 'Boost_1.0-lightblue'
        }
      },
      {
        name: 'BSD 2-clause',
        value: { 
          SPDX_ID: 'BSD-2-Clause',
          badge_ID: 'BSD_2--Clause-orange'
        }
      },
      {
        name: 'BSD 3-clause',
        value: {
          SPDX_ID: 'BSD-3-Clause',
          badge_ID: 'BSD_3--Clause-orange'
        }
      },
      {
        name: 'Creative Commons Zero v1.0 Universal',
        value: {
          SPDX_ID: 'CCO-1.0',
          badge_ID: 'CC0_1.0-lightgrey'
        }
      },
      {
        name: 'Eclipse Public License 2.0',
        value: {
          SPDX_ID: 'EPL-2.0',
          badge_ID: 'EPL_2.0-red'
        }
      },
      {
        name: 'GNU Affero General Public License v3.0',
        value: {
          SPDX_ID: 'AGPL-3.0-only',
          badge_ID: 'AGPL_v3-blue'
        }
      },
      {
        name: 'GNU General Public License v2.0',
        value: {
          SPDX_ID: 'GPL-2.0',
          badge_ID: 'GPL_v2-blue'
        }
      },
      {
        name: 'GNU Lesser General Public License v2.1',
        value: {
          SPDX_ID: 'LGPL-2.1',
          badge_ID: 'LGPL_v2.1-blue'
        }
      },
      {
        name: 'MIT',
        value: {
          SPDX_ID: 'MIT',
          badge_ID: 'MIT-yellow'
        }
      },
      {
        name: 'Mozilla Public License 2.0',
        value: {
          SPDX_ID: 'MPL-2.0',
          badge_ID: 'MPL_2.0-brightgreen'
        }
      },
      {
        name: 'The Unlicense',
        value: {
          SPDX_ID: 'Unlicense',
          badge_ID: 'Unlicense-blue'
        }
      }
    ]
  }
];

module.exports = questions;