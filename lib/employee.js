class employee {
    constructor(name, id, tittle, email) {
      this.name = name;
      this.id = id;
      this.tittle = tittle;
      this.email = email;
    }
  
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole() {
        return this.tittle;
    }

  }
  
  module.exports = employee;
  