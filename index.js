const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const teamMembers = [];

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "office",
            message: "What is your manager's office number?"
        }

    ])
        .then((managerans) => {
            const newManager = new Manager(managerans.name, managerans.id, managerans.email, managerans.office);
            teamMembers.push(newManager);
            whatsNext();
        })

}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school name?"
        }
    ])
        .then((internans) => {
            const newIntern = new Intern(internans.name, internans.id, internans.email, internans.school);
            teamMembers.push(newIntern);
            whatsNext();
        })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's Github username?"
        }
    ])
        .then((ingans) => {
            const newIntern = new Intern(ingans.name, ingans.id, ingans.email, ingans.github);
            teamMembers.push(newIntern);
            whatsNext();
        })
}




function whatsNext() {
    inquirer.prompt([
        {
            type: "list",
            name: "next",
            message: "What do you want to do next?",
            choices: ['create Manager', 'create Engineer', 'create Intern', 'done']
        }
    ])
        .then(answers => {
            switch (answers.next) {
                case 'create Manager':
                    createManager();
                    break;
                case 'create Engineer':
                    createEngineer();
                    break;
                case 'create Intern':
                    createIntern();
                    break;
                default:
                    writeFile();
            }
        })
}

