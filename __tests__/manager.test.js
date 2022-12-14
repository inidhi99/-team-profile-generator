const Manager = require('../lib/manager');

describe("Manager Class", () => {
    describe("Initialization", () => {
        it("should create a manager object with name, id, email, and office number properties", () => {
            const manager = new Manager('Nidhi', 50, 'username1@gmail.com', 1);
            expect(manager.officeNumber).toEqual(expect.any(Number));
        });

        it("should retrieve the manager role", () => {
            const manager = new Manager('Nidhi', 50, 'username1@gmail.com', 1);
            expect(manager.getRole()).toEqual("Manager");
        });
    })
});