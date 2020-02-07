import { AgeCalc } from ".././src/planet-age.js";

let ageCalc = new AgeCalc(14, 2, 1982, 80);
describe("AgeCalc Object", () => {
  let defaultObj = {
    birthDay: 14,
    birthMonth: 2,
    birthYear: 1982,
    totalLife: 80,
    totalDaysLived: 0,
    planetAges: {},
    lifeEnd: {},
    date: new Date()
  };
  test("AgeCalc Object should instantiate with basic properties", () => {
    expect(ageCalc).toEqual(defaultObj);
  });

  describe("planetRotations and monthsArr", () => {
    test("should return array of month lengths", () => {
      let listOfMonths = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
      expect(ageCalc.monthsArr()).toEqual(listOfMonths);
    });

    test("should return an object with all planet rotations", () => {
      let answer = {
        mercury: 88.0,
        venus: 224.7,
        earth: 365.2,
        mars: 687.0,
        jupiter: 4331,
        saturn: 10747,
        uranus: 30589,
        neptune: 59800,
        pluto: 90560
      };

      expect(ageCalc.planetRotations()).toEqual(answer);
    });
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
      ageCalc.getTotalDays();
      expect(ageCalc.planetAges).toEqual(13863);
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

  describe("getRestOfLife", () => {
    test("should return object with years left on that planet", () => {
      let lifeEndTest = {
        earth: "41.98",
        jupiter: "3.54",
        mars: "22.31",
        mercury: "174.20",
        neptune: "0.26",
        pluto: "0.17",
        saturn: "1.43",
        uranus: "0.50",
        venus: "68.22"
      };
      ageCalc.getRestOfLife();
      expect(ageCalc.lifeEnd).toEqual(lifeEndTest);
    });

    test("should return object with number of years that they lifed past their life expectancy", () => {
      expect(ageCalc.lifeEnd).toEqual({});
    });
  });
});
