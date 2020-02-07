export class AgeCalc {
  constructor(day, month, year, life) {
    this.birthDay = day;
    this.birthMonth = month;
    this.birthYear = year;
    this.totalLife = life;
    this.totalDaysLived = 0;
    this.planetAges = {};
    this.lifeEnd = {};
    this.date = new Date();
  }
  monthsArr() {
    return [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  }

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

  getThisYearsDays() {
    let monthTotals = this.monthsArr();
    let month = this.date.getMonth();
    let day = this.date.getDate();
    let totalDays = 0;

    for (let i = 0; i < month; i++) {
      totalDays += monthTotals[i];
    }
    return totalDays + day;
  }

  getDaysToBirthday() {
    let monthTotals = this.monthsArr();
    let totalDays = 0;

    for (let i = 0; i < this.birthMonth - 1; i++) {
      totalDays += monthTotals[i];
    }
    return totalDays + this.birthDay;
  }

  getTotalDays() {
    let birthdayDays = this.getDaysToBirthday();
    let daysToDate = this.getThisYearsDays();
    let yearsLivedInDays = (this.date.getFullYear() - this.birthYear) * 365;

    this.planetAges = yearsLivedInDays - birthdayDays + daysToDate;
    this.totalDaysLived = yearsLivedInDays;
    // return yearsLived - birthdayDays + daysToDate;
  }

  getAllAges() {
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
    return ages;
  }

  getRestOfLife() {
    let totalDays = this.totalLife * 365;
    let currentDays = (this.date.getFullYear() - this.birthYear) * 365;
    let remainingLifeInDays = totalDays - currentDays;
    let orbits = this.planetRotations();

    for (const planet in orbits) {
      this.lifeEnd[planet] = (remainingLifeInDays / orbits[planet]).toFixed(2);
    }
  }
} //end class
