import { concatenateNumbers } from "../src/concatenateNumbers";

test('concatenateNumbers debería concatenar strings como números', () => {
    expect(concatenateNumbers("3", "4")).toBe("34");
});


