// Links with Engineer.js
const Engineer = require('../lib/Engineer.js')

// Creates engineer object
test('creates an engineer object', () => {
    const engineer = new Engineer ('Bob Ross', '7410', 'bob@bob.com', 'bobrossgit')
    
    expect(engineer.name).toBe('Bob Ross');
    expect(engineer.id).toBe('7410');
    expect(engineer.email).toBe('bob@bob.com');
    expect(engineer.github).toBe('bobrossgit');
});
// Grabs the engineer's github username from the getGithub() function
test ("gets engineer's github username", () => {
    const engineer = new Engineer ('Bob Ross', '7410', 'bob@bob.com', 'bobrossgit')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('bobrossgit'));
});
// Grabs the employee's role from the getRole() function
test("gets engineer's role", () => {
    const engineer = new Engineer ('Bob Ross', '7410', 'bob@bob.com', 'bobrossgit')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
