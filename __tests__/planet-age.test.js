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
    let otherAge = new AgeCalc(17, 8, 2012, 80);
    test("should return 45 for first birthday", () => {
      expect(ageCalc.getDaysToBirthday()).toEqual(45);
    });
    test("should return 229 for second birthday option", () => {
      expect(otherAge.getDaysToBirthday()).toEqual(229);
    });
  });

  describe("getTotalDays", () => {
    test("should return days lived or 13863", () => {
      expect(ageCalc.getTotalDays()).toEqual(13863);
    });
  });

  describe("getAllAges", () => {
    let ages = {
      mercury: 157,
      venus: 61,
      earth: 38,
      mars: 20,
      jupiter: 3,
      saturn: 1,
      uranus: 0,
      neptune: 0,
      pluto: 0
    };
    test("should return object with users age for each planet", () => {
      expect(ageCalc.getAllAges()).toEqual(ages);
    });
  });
});
