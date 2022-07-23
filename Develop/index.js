// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project:",
  },
  {
    type: "input",
    name: "instructions",
    message: "Please provide installation instructions for your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage instructions for your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose what licenses your project should have:",
    choices: ["Creative Commons", "ISC", "MIT", "Do WTF You Want To", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Please provide any information a user should know about contributing to this project:",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be used to run tests:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README, one moment please");
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
