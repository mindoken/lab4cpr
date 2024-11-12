import {MiniMaple} from "../src/miniMaple";

test('calculate derivative of a monomial', () => {
    const m = new MiniMaple()
    expect(m.diff("4*x^3", "x")).toBe("12*x^2");
    expect(m.diff('5x^2', 'x')).toBe('10*x');
    expect(m.diff('7x', 'x')).toBe('7');
    expect(m.diff('9', 'x')).toBe('0');

});

test('return 0 if the variable is different', () => {
    const m = new MiniMaple()
    expect(m.diff("4*x^3", "y")).toBe("0");
    expect(m.diff('2x^2 + 3y - 1', 'y')).toBe('3');
    expect(m.diff('x^2 - 2y + 1', 'z')).toBe('0');

});

test('calculate derivative of a polynomial', () => {
    const m = new MiniMaple()
    expect(m.diff("4*x^3-x^2", "x")).toBe("12*x^2-2*x");
    expect(m.diff('2x^2 + 3x - 1', 'x')).toBe('4*x+3');
    expect(m.diff('-x^4 + 5x^3 - 2x + 1', 'x')).toBe('-4*x^3+15*x^2-2');
    expect(m.diff("4*x^3-x^2+8*x^6", "x")).toEqual("12*x^2-2*x+48*x^5");

});


test('handle negative coefficients', () => {
    const m = new MiniMaple()
    expect(m.diff("-4*x^3", "x")).toEqual("-12*x^2");
    expect(m.diff("-4*x^3+2*x", "x")).toEqual("-12*x^2+2");
});
