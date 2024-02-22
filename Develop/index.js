// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function readmeGenerator() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of this project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project!'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'installation',
            default: 'npm i',
            message: 'How do you install this project?'
        },
        {
            type: 'input',
            name: 'test',
            default: 'node index.js',
            message: 'How do I test this out?'
        },
        {
            type: 'input',
            name: 'useCase',
            message: 'Why would I need to use this?'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Who helped you make this project?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ]).then((info) => {
        const username = info.username
        const email = info.email
        const markiemark = generateMarkdown(info, username, email)

        fs.writeFile("./GeneratedReadme/ReadMe.md", markiemark, (err) => {
            if (err) {
                console.log(err)
            } else if (!err) {
                console.log("ReadMe Successfully Generated!!!")
            }
        })
    })
}

// TODO: Create a function to write README file

// Function call to initialize app
readmeGenerator();
