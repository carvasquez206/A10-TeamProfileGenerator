const Employee = require("./Employee");

class Engineer extends Employee {
    getRole () {
        return "Employee"; 
    }
}

module.exports = Employee;



/* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`
*/