const calculator = require('./calculator');

test('add', () => {
    expect(calculator.add(77, 2)).toBe(79);
});

test('subtract', () => {
    expect(calculator.sub(77, 2)).toBe(75);
});

test('multiply', () => {
    expect(calculator.mul(77, 2)).toBe(154);
});

test('divide', () => {
    expect(calculator.div(10, 4)).toBe(2.5);
});

test('divide by 0', () => {
    expect(calculator.div(2, 0)).toBe('error');
});