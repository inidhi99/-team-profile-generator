const Employee = require('./Employee');

class Manager extends Employee {
    // Constructor function is used to create objects containing the properties (name, id and email)
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
 
    getOfficeNumber() {return this.officeNumber;}
    getRole(){return "Manager";}
}

 
module.exports = Manager;