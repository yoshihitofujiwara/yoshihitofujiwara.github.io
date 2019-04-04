"use strict";

var app = app || {};

app.isBreakPC = function () {
  return $('meta').css("font-family") == "pc";
};

$(function () {
  if (AMP.isPC()) {
    $("html").addClass("pc");
  }
});