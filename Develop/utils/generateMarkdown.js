// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ((license = "Creative Commons")) {
    return `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`;
  } else if ((license = "ISC")) {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else if ((license = "MIT")) {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if ((license = "WTF")) {
    return `![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License] (#license)`;
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    Licensed under ${license}`;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
## Table of Contents

* [Title] (#title)
* [Description] (#description)
* [Instructions] (instructions)
* [Usage] (#usage)
* [Contributing] (#contributing)
* [Testing] (#testing)
* [Questions] (#questions)

## Title
${data.title}

## Description
${data.description}

## Instructions
${data.instructions}

## Usage
${data.usage}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Testing
${data.tests}

## Questions
If you have any questions, feel free to email me at ${data.email}
You can find me on GitHub at GitHub.com/${data.github}.
Thank you.
`;
}

module.exports = generateMarkdown;
