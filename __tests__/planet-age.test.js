import { AgeCalc } from ".././src/planet-age.js";

let ageCalc = new AgeCalc(14, 2, 1982, 80);
describe("AgeCalc Object", () => {
  let defaultObj = {
    birthDay: 14,
    birthMonth: 2,
    birthYear: 1982,
    totalLife: 80,
    totalDays: "",
    planetAges: []
  };
  test("AgeCalc Object should instantiate with basic properties", () => {
    expect(ageCalc).toEqual(defaultObj);
  });

  describe("getThisYearsDays", () => {
    test("should return 38", () => {
      expect(ageCalc.getThisYearsDays()).toEqual(38);
    });
  });

  describe("getDaysToBirthday", () => {
    test("should return 45", () => {
      expect(ageCalc.getDaysToBirthday()).toEqual(45);
    });
  });

  // describe("getTotalDays", () => {
  //   let ageCalc = new AgeCalc(14, 2, 1982, 80);

  //   test("should return days lived or 13833", () => {
  //     expect(ageCalc.getTotalDays()).toEqual(13833);
  //   });
  // });
});
