const employee = require("./lib/employee");

class intern extends employee {
  constructor (name, id, email, school) {
    super(name, id, "intern", email);
    this.school = school;
   
  }
  getSchool(){
      return this.school;
  }

  getRole() {
      return intern;
  }

}

module.exports = intern;