import Calcular from "./App.js";

describe("Calcular", () => {
  it("deberia convertir el string en un numero", () => {
    expect(Calcular("3")).toEqual(3);
  });
  it("deberia sumar 2 numeros de un string separados por una coma", () => {
    expect(Calcular("3,2")).toEqual(5);
  });
  it("deberia sumar mas de 2 numeros de un string separados por una coma", () => {
    expect(Calcular("3,2,5")).toEqual(10);
  });
  it("deberia sumar mas de 2 numeros de un string separados por guiones", () => {
    expect(Calcular("3-2-5")).toEqual(10);
  });
  it("deberia sumar mas de 2 numeros de un string con separadores introducidos por el usuario", () => {
    expect(Calcular("//[%]\n3%2%5")).toEqual(10);
  });
  it("deberia sumar mas de 2 numeros de un string con separadores introducidos por el usuario", () => {
    expect(Calcular("//[%][$]\n3%2%5$5")).toEqual(15);
  });
  //it("deberia sumar mas de 2 numeros de un string con separadores introducidos por el usuario ignorando aquellos numeros mayores a 1000", () => {
    //expect(Calcular("//[%][$]\n3%2%5,1000%5")).toEqual(15);
  //});
});
