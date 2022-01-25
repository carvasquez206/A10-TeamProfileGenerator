const Employee = require("./Employee");

class Manager extends Employee {
    getRole () {
        return "Employee"; 
    }
}


module.exports = Employee;




/* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`
*/