export class AgeCalc {
  constructor(day, month, year, life) {
    this.birthDay = day;
    this.birthMonth = month;
    this.birthYear = year;
    this.totalLife = life;
    this.extraLongLife = false;
    this.totalDaysLived = 0;
    this.planetAges = {};
    this.lifeEnd = {};
    this.dateYear = new Date().getFullYear();
    this.dateMonth = new Date().getMonth();
    this.dateDay = new Date().getDate();
  }
  monthsArr() {
    return [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  }

  //planet rotations
  planetRotations() {
    return {
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
  }

  //returns current day count from jan 1st
  getThisYearsDays() {
    let monthTotals = this.monthsArr();
    let month = this.dateMonth;
    let day = this.dateDay;
    console.log("day", this.dateDay, "month", this.dateMonth);
    let totalDays = 0;

    for (let i = 0; i < month; i++) {
      totalDays += monthTotals[i];
    }
    return totalDays + day;
  }

  //returns total days to birthday from jan 1st.
  getDaysToBirthday() {
    let monthTotals = this.monthsArr();
    let totalDays = 0;

    for (let i = 0; i < this.birthMonth - 1; i++) {
      totalDays += monthTotals[i];
    }
    return totalDays + this.birthDay;
  }

  //returns current amount of days a user has lived.
  getTotalDays() {
    let birthdayDays = this.getDaysToBirthday();
    let daysToDate = this.getThisYearsDays();
    let yearsLivedInDays = (this.dateYear - this.birthYear) * 365;

    this.planetAges = yearsLivedInDays - birthdayDays + daysToDate;
    this.totalDaysLived = yearsLivedInDays;
    // return yearsLived - birthdayDays + daysToDate;
  }

  getAllAges() {
    this.getTotalDays();
    let orbits = this.planetRotations();
    let usersDays = this.planetAges;
    let ages = {
      mercury: 0,
      venus: 0,
      earth: 0,
      mars: 0,
      jupiter: 0,
      saturn: 0,
      uranus: 0,
      neptune: 0,
      pluto: 0
    };

    for (var planet in orbits) {
      ages[planet] = (usersDays / orbits[planet]).toFixed(2);
    }
    this.planetAges = ages;
    return ages;
  }

  getRestOfLife() {
    let totalDays = this.totalLife * 365;
    let currentDays = (this.dateYear - this.birthYear) * 365;
    let remainingLifeInDays = totalDays - currentDays;
    let orbits = this.planetRotations();
    let that = this;

    if (currentDays > totalDays) {
      that.extraLongLife = true;
      for (const planet in orbits) {
        this.lifeEnd[planet] = ((currentDays - totalDays) / orbits[planet]).toFixed(2);
      }
    } else {
      that.extraLongLife = false;
      for (const planet in orbits) {
        this.lifeEnd[planet] = (remainingLifeInDays / orbits[planet]).toFixed(2);
      }
    }
  }
} //end class
