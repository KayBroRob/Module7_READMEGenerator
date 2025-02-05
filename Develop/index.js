// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Type a description explaining the what, why and how of your project. Consider your motivation for creation, what problem does your project solve and what was learned during the process',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps for installing your project? Write a step by step guide to installing your project',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Include any contributing authors, along with their Github profile link, and links to any third party sites or tutorials referenced',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Type out instructions for how to test your project',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose a license from this list for your project',
        choices: ['MIT', 'ISC', 'Apache 2.0', 'No Licensing'],
    },
    {
        type: 'input',
        name: 'Github Username',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address',
    },
]

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.error('Error writing file', err);
        } else {
            console.log('README.md has been created!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log('Kaylyns README generator!');

    inquirer.prompt(questions)
        .then(answers => {
            const readmeContent = generateREADME(answers);
        writeToFile(readmeContent);
        })
}

// Function call to initialize app
init();
