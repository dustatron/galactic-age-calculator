import { AgeCalc } from ".././src/planet-age.js";

describe("AgeCalc Object", () => {
  let ageCalc = new AgeCalc(14, 2, 1982, 80, "Mars");
  let defaultObj = {
    birthDay: 14,
    birthMonth: 2,
    birthYear: 1982,
    totalLife: 80,
    planet: "Mars"
  };
  test("AgeCalc Object should instantiate with basic properties", () => {
    expect(ageCalc).toEqual(defaultObj);
  });
});
