/* jshint -W097 */ // Disable warning 'use function form of use strict'
/* globals  console:false */ // defines as a read only global for jsHint
/* globals require:false */
/* globals module */
"use strict";

/* We define the generated footer for the page */

var $ = require("jquery");
var foot = require("templates/footer.md");

var show = function() {
  // Generate footer from template
  $("body").append(foot);
};

// Now, exporting the function itself.
module.exports = show;
