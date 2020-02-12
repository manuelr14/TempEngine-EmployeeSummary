# TempEngine-EmployeeSummary

One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, how we design our code is just as important as the code itself. In this homework assignment, your challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.


You will build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. Following the common templates for user stories, we can frame this challenge as follows:

As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
How do you deliver this? Here are some guidelines:


Inquirer npm package used to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.


The app run as a Node CLI to gather information about each employee.


In the Develop folder, there is a package.json, so make sure to npm install.
The dependencies are, jest for running the provided tests, and inquirer for collecting input from the user.


Classes
The project has these classes: Employee, Manager, Engineer,
Intern. 

User input
The project prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

Roster output
The project generates a team.html page in the output directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:


Name


Role


ID


Role-specific property (School, link to GitHub profile, or office number)
