/* jshint -W097 */ // Disable warning 'use function form of use strict'
/* globals  console:false */ // defines as a read only global for jsHint
/* globals require:false */
/* globals module */
"use strict";

/* We define the generated header for the page */

var $ = require("jquery");
var head = require("templates/header.md");

var show = function() {
  // Generate footer from template
  $("body").append(head);
};

// Now, exporting the function itself.
module.exports = show;
