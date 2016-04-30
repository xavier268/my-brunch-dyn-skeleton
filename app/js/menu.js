/* jshint -W097 */ // Disable warning 'use function form of use strict'
/* globals  console:false */ // defines as a read only global for jsHint
/* globals require:false */
/* globals module */
"use strict";

/**
Defines the menu, using the configuration object
**/

var config = require("js/config");
var $ = require("jquery");

$("body").append("MENU<br/>");

for (var c in config.pages) {
  $("body").append("<a>" + c +" : " + config.pages[c] + "</a><br/>");
}
