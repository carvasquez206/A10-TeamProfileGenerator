const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, github) {
        super(id, name, email)
        this.github = github;
    }
    getGithub() {
        return this.github; 
    }

    getRole () {
        return "Employee"; 
    }
}

module.exports = Engineer;




/* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`
*/