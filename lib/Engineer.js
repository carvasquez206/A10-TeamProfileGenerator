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



/* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`
*/