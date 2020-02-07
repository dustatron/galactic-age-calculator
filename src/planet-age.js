export class AgeCalc {
  constructor(day, month, year, life, planet) {
    this.birthDay = day;
    this.birthMonth = month;
    this.birthYear = year;
    this.totalLife = life;
    this.totalDays = "";
    this.planetAges = [];
  }

  getThisYearsDays() {
    let monthTotals = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let totalDays = 0;

    for (let i = 0; i < month; i++) {
      totalDays += monthTotals[i];
    }
    return totalDays + day;
  }

  getTotalDays() {
    //return total days on the planet.
  }

  getPlanetage() {
    //return age on this planet.
  }
} //end class
