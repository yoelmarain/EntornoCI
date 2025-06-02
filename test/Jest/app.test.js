const concatenateNumbers = require("../../src/concatenateNumbers");

test('concatenateNumbers debería concatenar strings como números', () => {
    expect(concatenateNumbers("3", "4")).toBe("344");
});

test('concatenateNumbers debería devolver mensaje de error si algún input está vacío', () => {
    expect(concatenateNumbers("", "")).toBe("Se deben ingresar dos números válidos");
});