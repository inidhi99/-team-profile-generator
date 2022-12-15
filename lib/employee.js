// employee class 
class Employee {

    // Constructor function is used to create objects containing the properties (name, id and email)
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email= email;
    }

    getId() {return this.id; }
    getEmail() {return this.email;}
    getRole(){return "Employee";}
}

// exported
module.exports = Employee;