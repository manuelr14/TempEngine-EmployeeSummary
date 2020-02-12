const employee = require("./lib/employee");

class engineer extends employee {
  constructor (name, id, email, gitHub) {
    super(name, id, "engineer", email);
    this.gitHub = gitHub;
   
  }
  getgitHub(){
      return this.github;
  }

  getRole() {
      return engineer;
  }

}


module.exports = engineer;
  
  