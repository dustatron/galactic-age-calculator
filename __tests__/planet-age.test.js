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
      mercury: "157.53",
      venus: "61.70",
      earth: "37.96",
      mars: "20.18",
      jupiter: "3.20",
      saturn: "1.29",
      uranus: "0.45",
      neptune: "0.23",
      pluto: "0.15"
    };
    test("should return object with users age for each planet", () => {
      expect(ageCalc.getAllAges()).toEqual(ages);
    });
  });
});
