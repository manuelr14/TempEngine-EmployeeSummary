const fs = require("fs");
const inquirer = require("inquirer");

const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

const employeeinfo = {};

function mainInfo() {

    return inquirer.prompt([
        {
            message: "Enter Employee's Name",
            name:"name"
        },
        {
            message:"Enter Employee's ID",
            name: "id"
        },
        {
            message: "Enter Employees Title",
            type:"list",
            name: "title",
            choices: ["Manager","Engineer","Intern"]
        },
        {
            message:"Enter Employee's Email",
            name:"email"
        }
    ]);

}

function managerInfo() {

    return inquirer.prompt([
        {
            message: "Enter office's number",
            name:"office"
        },
        
    ]);

}

function githubUsername() {

    return inquirer.prompt([
        {
            message: "Enter Github's username",
            name:"username"
        },
        
    ]);

}

function internSchool() {

    return inquirer.prompt([
        {
            message: "Enter Intern's School",
            name:"school"
        },
        
    ]);

}



