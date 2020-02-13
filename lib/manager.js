const employee = require("./employee");

class manager extends employee {
  constructor (name, id, email, officeNumber) {
    super(name, id, "manager", email);
    this.officeNumber = officeNumber;
   
  }

  getRole() {
      return manager;
  }

}

module.exports = manager;






