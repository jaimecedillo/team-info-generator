const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');




test('get office number value', () => {
    const manager = new Manager('John', 353, 'test@test.com', 22);
    expect(manager.office).toBe(22);
})

test('testing get office number method', () => {
    const manager = new Manager('John', 353, 'test@test.com', 22);
    expect(manager.getOffice()).toBe(22);
})

test('get all of managers info', () => {
    const manager = new Manager('John', 353, 'test@test.com', 22);
    expect(manager.getRole()).toBe('Manager');
})