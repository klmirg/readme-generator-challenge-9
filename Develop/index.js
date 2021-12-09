// These are the packages needed for this application
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// This is the array of questions that gets the data we need to generate the README
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "name",
    message: "What is the name of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of what your project does."
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", 'APACHE2.0', 'GPL3.0', 'BSD3', 'None']
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repository?"
  },
  {
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repository?"
  },
];

// This is the function that writes README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// This is the function that initializes the app
function init() {
  inquirer.prompt(questions).then((answers)=>{
    writeToFile("README.md", generateMarkdown({...answers}) )
  })
}

// this is the function call to initialize the app
init();
