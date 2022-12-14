const Intern = require('../lib/intern');

describe("Intern Class", () => {
    describe("Initialization", () => {
        it("should create an intern object with name, id, email, and school id properties", () => {
            const intern = new Intern('Nidhi', 50, 'username1@gmail.com', 'UCF');
            expect(intern.school) .toEqual(expect.any(String));
        });

        it("should retrieve school from getSchool", () => {
            const intern = new Intern('Nidhi', 50, 'username1@gmail.com', 'UCF');
            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
        });

        it("should retrive employee's role", () => {
            const intern = new Intern('Nidhi', 50, 'username1@gmail.com', 'UCF');
            expect(intern.getRole()).toEqual("Intern");
        });
    })
});