const employee = require("./employee");

class manager extends employee {
  constructor (name, id, email, officeNumber) {
    super(name, id, "Manager", email);
    this.officeNumber = officeNumber;
   
  }

  getRole() {
      return manager;
  }

}

module.exports = manager;






