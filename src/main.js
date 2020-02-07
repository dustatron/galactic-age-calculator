import { AgeCalc } from "./planet-age.js";
import "./scss/main.scss";
import $ from "jquery";

$(document).ready(function() {
  //get form submit button
  $("form").submit((event) => {
    event.preventDefault();

    let month = $("#month").val();
    let day = $("#day").val();
    let year = $("#year").val();
    let life = $("#live").val();

    console.log("click");
  });

  $(".planets").on("click", "div", function() {
    console.log(this);
  });
});
