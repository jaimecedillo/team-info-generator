const Engineer = require('../lib/Engineer');

test('Set github account', () => {
    const engineer = new Engineer('John', 353, 'test@test.com', "username");
    expect(engineer.github).toBe("username")
})

test('Get github account', () => {
    const engineer = new Engineer('John', 353, 'test@test.com', "username");
    expect(engineer.github).toBe("username");
})

test("Get all of engineer's info", () => {
    const engineer = new Engineer('John', 353, 'test@test.com', "username");
    expect(engineer.getRole()).toBe('Engineer');
})