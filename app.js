const fs = require("fs");
const inquirer = require("inquirer");

const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

const employeeinfo = {};

mainInfo();

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
    ]).then(function(response){

            employeeinfo.name = response.name;
            employeeinfo.id = response.id;
            employeeinfo.email = response.email;

            if (response.tittle === "Manager") {

                managerInfo();

                const manageremp = new manager (employeeinfo.name, employeeinfo.id, employeeinfo.tittle, employeeinfo.email);
                return manageremp;

            }else if ( response.tittle === "Engineer"){
                
                githubUsername();
                const engineeremp = new engineer (employeeinfo.name, employeeinfo.id, employeeinfo.tittle, employeeinfo.email, employeeinfo.github);
                return engineeremp;

            }else {

                internSchool();
                const internemp = new intern (employeeinfo.name, employeeinfo.id, employeeinfo.tittle, employeeinfo.email, employeeinfo.school);
                return internemp;
            }

    });

};

function managerInfo() {

    return inquirer.prompt([
        {
            message: "Enter office's number",
            name:"office"
        },
        
    ]).then(function(responsemanager){

            employeeinfo.office = responsemanager.office;
    });

};

function githubUsername() {

    return inquirer.prompt([
        {
            message: "Enter Github's username",
            name:"username"
        },
        
    ]).then(function(responseengineer){
            employeeinfo.github = responseengineer.username

    });

};

function internSchool() {

    return inquirer.prompt([
        {
            message: "Enter Intern's School",
            name:"school"
        },
        
    ]).then(function(responseintern){
        employeeinfo.school= responseintern.school;

    });

};



