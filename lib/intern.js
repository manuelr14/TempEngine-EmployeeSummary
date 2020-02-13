const employee = require("./employee");

class intern extends employee {
  constructor (name, id, email, school) {
    super(name, id, "Intern", email);
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