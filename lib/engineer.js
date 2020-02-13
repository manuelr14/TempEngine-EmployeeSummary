const employee = require("./employee");

class engineer extends employee {
  constructor (name, id, email, gitHub) {
    super(name, id, "Engineer", email);
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
  
  