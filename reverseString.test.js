const reverseString = require('./reverseString');

test('abcd -> dcba', () => {
    expect(reverseString('abcd')).toBe('dcba');
});

test('handle whitespace', () => {
    expect(reverseString('a bcd')).toBe('dcb a');
});