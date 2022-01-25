const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id,email,  github) {
        super(id, name, email);
        this.github = github;
    }
    getGithub() {
        return this.github; 
    }

    getRole () {
        return "Engineer"; 
    }
}

module.exports = Engineer;



/* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`
*/