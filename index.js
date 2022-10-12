// Requiring Inquirer package
const inquirer = require('inquirer');
// attaching employee file
const Employee = require('./lib/Employee');
// attaching manager file
const Manager = require('./lib/Manager');
// attaching engineer file 
const Engineer = require('./lib/Engineer');
// attaching intern file
const Intern = require('./lib/Intern');
// attaching generate page file
const generatePage = require('./src/page-template');
// attaching write file page
const writeFile = require('./src/generate-site')

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = {manager, engineer, intern};

function Prompt() {
    // questions to be answered by user in terminal
    return inquirer
        .prompt([
        {   // General questions for each position
            type: 'list',
            name: 'role',
            message:"What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'text',
            name: 'employee',
            message: "What is the Employee's name?"
        },
        {
            type:'text',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?"
        }])
        .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                return inquirer
                    // Manager questions
                    .prompt([{
                        type:'text',
                        name: 'office',
                        message:"What is the Manager's office number?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({office, anotherEntry}) => {
                        manager.push(new Manager(employee, id, email, office))
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })
            } else if (role === "Engineer") {
                return inquirer
                    .prompt([{
                        // Engineer Questions
                        type: 'text',
                        name: 'github',
                        message: "What is the Engineer's Github username?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({github, anotherEntry}) => {
                        engineer.push(new Engineer(employee, id, email, github))
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })
            } else if (role === 'Intern') {
                // Intern Questions
                 return inquirer
                    .prompt([{
                        type:'text',
                        name:'school',
                        message: "What is the Intern's school?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({school, anotherEntry}) => {
                        intern.push(new Intern(employee, id, email, school))
                        // console.log(employeeArr)
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })
            }
        })
};


// Initiates prompt function
Prompt()
    .then(teamData => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })