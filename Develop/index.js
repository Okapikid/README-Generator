// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "GitHub",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "title",
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
    name: "toc",
    message: "Please provide a table of contents:",
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
    choices: [
      "Academic",
      "Artistic",
      "Creative Commons",
      "ISC",
      "MIT",
      "Open Software",
      "None",
    ],
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
  {
    type: "input",
    name: "questions",
    message: "Please provide usage instructions for your project:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
