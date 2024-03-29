// Returns a license badge based on which license is passed in. If there is no license, return an empty string.
function renderLicenseBadge(license) {
  if(!license) return '';

  return `https://img.shields.io/badge/License-${license.badge_ID}.svg`;
}

// Returns the license link. If there is no license, return an empty string.
function renderLicenseLink(license) {
  if(license.name === 'no license') return '';
  if(license.SPDX_ID === 'CCO-1.0') return 'https://creativecommons.org/publicdomain/zero/1.0/';

  return `https://opensource.org/licenses/${license.SPDX_ID}`;
}

// Returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license.name === 'no license') return '';

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `[![License](${badge})](${link})`;
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This repository is covered under ${data.license.name}.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the repo, open an issue 
or contact me directly at ${data.email}. You can find 
more of my work at [${data.username}](https://github.com/${data.username}).`
}

module.exports = generateMarkdown;