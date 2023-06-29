// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// ![Static Badge](https://img.shields.io/badge/License-MIT.svg)
function renderLicenseBadge(license) {
  if(license === 'No license') return;

  license.split(' ').join('_');
  const badge = `![Static Badge](https://img.shields.io/badge/License-${license}-blue.svg)`;

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'No license') return;


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  `;
}

module.exports = generateMarkdown;
