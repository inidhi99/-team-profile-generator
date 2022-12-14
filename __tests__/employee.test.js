const Employee = require("../lib/employee");


    // describing test 
describe("Initialization", () =>{
    // functionilty test
    it ("should make an object with name, id & email properties", () => {
        let newObj = {
            name:"nidhi", 
            id: "1",
            email: "inidhi99@gmail.com",
        }

    //Arrange 
    let empObj = new Employee(newObj.name, newObj.id, newObj.email);
    let empObj2 = new Employee ("sachin", "2", "sachin@gmail.com" )
console.log(empObj);


    //Act 

    //Assert 
    // expect will be test result 
    expect(empObj.name).toBe("nidhi");
    expect(empObj.id).toBe("1")
    expect(empObj.getName()).toBe("sachin");
    expect(empObj.getRole()).toBe("Employee");
    })
})



