const Employee = require('../lib/Employee');

test('Creates employee info', () => {
    const employee = new Employee('John', 353, 'test@test.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual('test@test.com')
});

test("Get employee's name value", () => {
    const employee = new Employee('John');
    expect(employee.getName()).toBe('John');
});

test('Get employee id value', () => {
    const employee = new Employee('John', 123);
    expect(employee.getId()).toBe(123);
});
test('Get employees email value', () => {
    // const testEmail = ''test@test.com'';
    const employee = new Employee('John', 123, 'test@test.com');
    expect(employee.getEmail()).toBe('test@test.com');
});

test("Get all of employee's info", () => {
    const employee = new Employee('John', 353, 'test@test.com');
    expect(employee.getRole()).toBe('Employee');

})