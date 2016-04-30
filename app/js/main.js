
/* jshint -W097 */              // Disable warning 'use function form of use strict'
/* globals  console:false */    // defines as a read only global for jsHint
/* globals require:false */
"use strict";

/*******************************************************************************
This module will trigger (side effect) the display of all the site.
You just need to require it from the index.html file, after downloading
the app.js compiled scripts.
*******************************************************************************/

var $ = require('jquery');

console.log("jquery version : " + $().jquery + " ok !");

console.log("Launching page display upon full load ... ");

$("document").ready(function() {

  require("js/header")();                           // Here, we call the exported module function
  $("body").append(require("templates/mainbody"));  // required object is the compiled template string
  require("js/footer")();

});
