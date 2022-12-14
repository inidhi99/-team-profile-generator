const Employee = require('./Employee');

class Engineer extends Employee {
    // Constructor function is used to create objects containing the properties (name, id and email)
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {return this.github;}

    getRole(){return "Engineer";}
}

module.exports = Engineer;