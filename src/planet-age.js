export class AgeCalc {
  constructor(day, month, year, life, planet) {
    this.birthDay = day;
    this.birthMonth = month;
    this.birthYear = year;
    this.totalLife = life;
    this.totalDays = "";
    this.planetAges = [];
  }

  monthsArr() {
    return [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  }

  getThisYearsDays() {
    let monthTotals = this.monthsArr();
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
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
    let date = new Date();
    let birthdayDays = this.getDaysToBirthday();
    let daysToDate = this.getThisYearsDays();
    let yearsLived = (date.getFullYear() - this.birthYear) * 365;

    return yearsLived - birthdayDays + daysToDate;
  }

  getPlanetage() {
    //return age on this planet.
  }
} //end class
