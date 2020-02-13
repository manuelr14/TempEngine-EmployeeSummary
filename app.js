// const fs = require("fs");
const inquirer = require("inquirer");

// const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

const employeeinfo = { };

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
            name: "tittle",
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
            employeeinfo.tittle = response.tittle;

            if (employeeinfo.tittle === "Manager") {

                managerInfo();

               

            }else if ( employeeinfo.tittle === "Engineer"){
                
                githubUsername();
               
            }else {

                internSchool();
                
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
            const manageremp = new manager (employeeinfo.name, employeeinfo.id, employeeinfo.email, employeeinfo.office);
            console.log(manageremp);
            return manageremp;
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
            
            const engineeremp = new engineer (employeeinfo.name, employeeinfo.id, employeeinfo.email, employeeinfo.github);
            console.log(engineeremp);
            return engineeremp;

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

        const internemp = new intern (employeeinfo.name, employeeinfo.id, employeeinfo.email, employeeinfo.school);
                console.log(internemp);
                return internemp;
    });

};



