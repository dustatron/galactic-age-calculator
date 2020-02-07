import { AgeCalc } from "./planet-age.js";
import "./scss/main.scss";
import $ from "jquery";

$(document).ready(function() {
  //get form submit button
  $("form").submit((event) => {
    event.preventDefault();

    let day = parseInt($("#day").val());
    let month = parseInt($("#month").val());
    let year = parseInt($("#year").val());
    let life = parseInt($("#life").val());

    const ageCalc = new AgeCalc(day, month, year, life);
    $(".hide").fadeIn();
    presentData(ageCalc);
  });

  function presentData(orbits) {
    orbits.getAllAges();
    orbits.getRestOfLife();

    let planetsArr = Object.entries(orbits.planetAges);

    planetsArr.forEach((planet) => {
      $("#" + planet[0] + "-age").html(planet[1]);
      if (orbits.extraLongLife) {
        $("#" + planet[0] + "-life").addClass("red-bold");
        $("#" + planet[0] + "-life").html(orbits.lifeEnd[planet[0]] + " past expectancy");
      } else {
        $("#" + planet[0] + "-life").removeClass("red-bold");
        $("#" + planet[0] + "-life").html(orbits.lifeEnd[planet[0]]);
      }
    });
  }
});
