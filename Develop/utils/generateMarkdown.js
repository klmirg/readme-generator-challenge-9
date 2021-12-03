// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // look for license badge url and dynamically input data.license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if you choose a license render * [License](#license)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // this project is licensed under the "license " license.
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("DATA FROM INDEX.jS", data)
  return `# ${data.name}

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contribution)


 ## Description
 ## Installation
 ## Usage
 ## Contributions

 ${data.description}

`;
}

module.exports = generateMarkdown;
