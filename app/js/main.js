
/* jshint -W097 */              // Disable warning 'use function form of use strict'
/* globals  console:false */    // defines as a read only global for jsHint
/* globals require:false */
"use strict";

var $ = require('jquery');

console.log("Entering main.js");

console.log("Checking jquery version : ");
console.log($('body').jquery);

console.log("Preparing to display something in the page ...");
$("document").ready(function() {
  $("body").append("This is the new body ...");
  console.log("Message was displayed");

  console.log("Now, adding template data ...");
  var tpl = require("templates/README");
  $("body").append(tpl); // tpl is directly the compiled template string ...

  console.log("Now, adding footer");
  var foot = require("js/footer");
  foot();

});
