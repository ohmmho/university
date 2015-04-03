// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
 
// BEGIN VENDOR JS FOR WEBARCH (plus add in jquery.turbolinks)
//= require plugins/pace/pace.min
//= require plugins/jquery-1.8.3.min
//= require jquery_ujs
 //= require plugins/boostrapv3/js/bootstrap.min
 //= require plugins/breakpoints
 //= require plugins/jquery-unveil/jquery.unveil.min
 //= require plugins/jquery-block-ui/jqueryblockui
 //= require plugins/jquery-scrollbar/jquery.scrollbar.min
 //= require plugins/jquery-numberAnimate/jquery.animateNumbers
 
// BEGIN CORE TEMPLATE JS FOR WEBARCH
//= require js/core
//= require js/chat
//= require site.js
 
//  I prefer to list scripts in a specific order, so I comment out require_tree .
// require_tree .
//= require turbolinks