// Links intern.js
const Intern = require('../lib/Intern.js');

// Creates intern object
test ('creates an intern object', () => {
    const intern = new Intern('New Guy', '0000', 'new@guy.com', 'College');
    expect(intern.name).toBe('New Guy');
    expect(intern.id).toBe('0000');
    expect(intern.email).toBe('new@guy.com');
    expect(intern.school).toBe('College');
});
// Grabs intern's school from the getSchool() function
test("gets intern's school", () => {
    const intern = new Intern('New Guy', '0000', 'new@guy.com', 'College');
    expect(intern.getSchool()).toEqual(expect.stringContaining('College'));
});
// Grabs the intern's role from getRole() function.
test("gets intern's role", () => {
    const intern = new Intern('New Guy', '0000', 'new@guy.com', 'College');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
