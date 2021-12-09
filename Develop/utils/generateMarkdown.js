// This function is looking for the license badge that goes with which license the user picked or didn't pick and renders it on the page.
function renderLicenseBadge(license) {
  // this looks for license badge url and dynamically input data.license
  if(license !== "None"){
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
   
}

// This function renders the license link that the user chooses, if the user chooses a license.
function renderLicenseLink(license) {
  
  if (license !== "None") {
    return `\n * [License](#license)\n`
  } 
  return '';
}

// This function is rendering the license that the user picks to the 'license' section and displaying on the page what license the project is under.
function renderLicenseSection(license) {
  
  if(license !== "None"){
    return ` ## License
    
      This project is licensed under the ${license} license.`
  }
}

// This function gets all the data that was given and makes a layout of the page that will be created.
function generateMarkdown(data) {
  console.log("DATA FROM INDEX.jS", data)
  return `# ${data.name}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributions](#contributions)

* [Tests](#tests)

* [Questions](#questions)

 ## Installation

 To install necessary dependencies, run the following command:
  
 ' ${data.installation} '
 
 ## Usage

${data.usage}

${renderLicenseSection(data.license)}

 ## Contributions

 ${data.contribution}
 
 ## Tests

 To run tests, run the following command:

 ' ${data.test} '

 ## Questions

 If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at https://github.com/${data.username}.

`;
}

module.exports = generateMarkdown;
