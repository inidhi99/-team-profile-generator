const Employee = require("../lib/Employee")

describe("Employee Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, id & email properties", () => {
            const employee = new Employee('Nidhi', 50, 'username@gmail.com');
            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        })
        
        it("should retrive the employee's role", () => {
            const employee = new Employee('Nidhi1', 45, 'username1@gmail.com');
            expect(employee.getRole()).toEqual("Employee");
        }); 
    })
})