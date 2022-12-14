
const Employee = require('./Employee');

class Intern extends Employee {
    // Constructor function is used to create objects containing the properties (name, id and email)
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {return this.school;}

    getRole(){return "Intern";}
}


module.exports = Intern;
