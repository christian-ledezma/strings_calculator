import sumarCadena from "./string-calculator.js";

describe("Calculadora de Cadenas", () => {
  it("debería retornar 0 para cadena vacía", () => {
    expect(sumarCadena("")).toEqual(0);
  });

});