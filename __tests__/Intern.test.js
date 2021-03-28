const Intern = require('../lib/Intern');

test('Intern school value', () => {
    const intern = new Intern('John', 353, 'test@test.com', 'USC');
    expect(intern.school).toBe('USC');
})

test('Get school value', () => {
    const intern = new Intern('John', 353, 'test@test.com', 'USC');
    expect(intern.getSchool()).toBe('USC');
})

test('GEt all of Interns info', () => {
    const intern = new Intern('John', 353, 'test@test.com', 'USC');
    expect(intern.getRole()).toBe('Intern');
})