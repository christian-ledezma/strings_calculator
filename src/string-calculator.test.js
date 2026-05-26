import sumarCadena from "./string-calculator.js";

describe("Calculadora de Cadenas", () => {
    it("debería retornar 0 para cadena vacía", () => {
        expect(sumarCadena("")).toEqual(0);
    });

    it("debería retornar el número para cadena con un solo número", () => {
        expect(sumarCadena("2")).toEqual(2);
    });

    it("debería retornar el número para cadena con un solo número (otro caso)", () => {
        expect(sumarCadena("5")).toEqual(5);
    });

});