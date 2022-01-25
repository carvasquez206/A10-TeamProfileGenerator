const Employee = require("./Employee");

class Manager extends Employee {
    getRole () {
        return "Employee"; 
    }
}


module.exports = Employee;




/* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`
*/