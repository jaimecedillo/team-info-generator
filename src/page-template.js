const path = require("path");
const fs = require("fs");


// create global variable that holds HTML


function generateHTML(arr) {
    arr.forEach(employee => {
        switch (employee.getRole()) {
            case 'Manager':
                managerCard();
                break;
            case 'Engineer':
                engineerCard();
                break;
            case 'Intern':
                internCard();
                break;
        }
    })
    // return original variable + closing tag
}

