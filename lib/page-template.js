const path = require("path");
const fs = require("fs");

const srcDir = path.resolve(__dirname, "../src");

const render = employees => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => managerCard(manager))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerCard(engineer))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => internCard(intern))
    );

    return createMain(html.join(""));

};



// manager card function
const managerCard = manager => {
    let template = fs.readFileSync(path.resolve(srcDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "office", manager.getOffice());
    return template
};
// engineer card function
const engineerCard = engineer => {
    let template = fs.readFileSync(path.resolve(srcDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGitHub());
    return template
};
// intern card function
const internCard = intern => {
    let template = fs.readFileSync(path.resolve(srcDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template
};
// main HTML function
const createMain = html => {
    let template = fs.readFileSync(path.resolve(srcDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};
// function to insert users input
const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};


module.exports = render;
