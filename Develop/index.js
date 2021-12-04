// TODO: Include packages needed for this application
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "",
    message: "What is your GitHub username"
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
    message: "What kind of license does your project have?",
    choices: ["MIT", 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: "input",
    name: "installation",
    message: "Please describe how to install your application?"
  },
  {
    type: "input",
    name: "test",
    message: "What command should we use to run tests?"
  },
  {
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repository?"
  },
  
  {
    type: "input",
    name: "github",
    message: "What is your Github username?"
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers)=>{
    writeToFile("README.md", generateMarkdown({...answers}) )
  })
}

// Function call to initialize app
init();
