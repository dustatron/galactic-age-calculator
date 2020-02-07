import { AgeCalc } from ".././src/planet-age.js";

describe("AgeCalc Object", () => {
  let ageCalc = new AgeCalc(24, 80, "Mars");
  let defaultObj = {
    age: 24,
    totalLife: 80,
    planet: "Mars"
  };
  test("AgeCalc Object should instantiate with basic properties", () => {
    expect(ageCalc).toEqual(defaultObj);
  });
});
