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

    it("debería sumar dos números separados por coma", () => {
        expect(sumarCadena("1,2")).toEqual(3);
    });

    it("debería sumar varios números separados por coma", () => {
        expect(sumarCadena("1,2,3")).toEqual(6);
    });
    
    it("debería sumar muchos números separados por coma", () => {
        expect(sumarCadena("1,2,4,8")).toEqual(15);
    });

    it("debería sumar números separados por guion", () => {
        expect(sumarCadena("1-2-3")).toEqual(6);
    });
    
    it("debería sumar números con separadores mixtos coma y guion", () => {
        expect(sumarCadena("1-2,3")).toEqual(6);
    });

    it("debería soportar delimitador custom especificado con //[;]", () => {
        expect(sumarCadena("//[;] 6;7;4")).toEqual(17);
    });
    
    it("debería combinar delimitador custom con coma y guion", () => {
        expect(sumarCadena("//[;] 6,3-2;1")).toEqual(12);
    });

    it("debería ignorar números mayores a 1000", () => {
        expect(sumarCadena("2,1001")).toEqual(2);
    });
    
    it("debería incluir exactamente 1000 pero ignorar 1001", () => {
        expect(sumarCadena("1000,1001,3")).toEqual(1003);
    });

});