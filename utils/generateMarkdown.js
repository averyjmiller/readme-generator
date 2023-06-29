// Returns a license badge based on which license is passed in. If there is no license, return an empty string.
function renderLicenseBadge(license) {
  if(!license) return '';

  return `https://img.shields.io/badge/License-${license.badge_ID}.svg`;
}

// Returns the license link. If there is no license, return an empty string.
function renderLicenseLink(license) {
  if(!license) return '';

  return `https://opensource.org/licenses/${license.SPDX_ID}`;
}

// Returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) return '';

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `[![License](${badge})](${link})`;
}

function generateMarkdown(data) {
  console.log(renderLicenseSection(data.license));
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
