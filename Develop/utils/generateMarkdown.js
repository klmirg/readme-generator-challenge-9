// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // look for license badge url and dynamically input data.license
  if(license !== "None"){
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
   
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if you choose a license render * [License](#license)
  if (license !== "None") {
    return `\n * [License](#license)\n`
  } 
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // this project is licensed under the "license " license.
  if(license !== "None"){
    return `## License
    
      This project is licensed under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("DATA FROM INDEX.jS", data)
  return `# ${data.name}


## Description

${data.description}

## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

* [Contributions](#contributions)

* [Tests](#tests)

* [Badges](#Badges)

 ## Installation

 ${data.installation}

 ## Usage

${renderLicenseSection(data.license)}

 ## Contributions

 ${data.contribution}
 
 ## Tests

 ${data.test}
 
 ## Badges

 ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
