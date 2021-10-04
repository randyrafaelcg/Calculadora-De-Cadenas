import Calcular from "./App.js";

describe("Calcular", () => {
  it("deberia convertir el string en un numero", () => {
    expect(Calcular("3")).toEqual(3);
  });
  
});
