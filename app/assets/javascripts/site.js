// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.




// login & register form

var login = function () {
  $('#login_toggle').click(function(){
        console.log("working1");
    $('#frm_login').show();
    $('#frm_register').hide();
      $(".lazy").lazyload({
          effect : "fadeIn"
       });
  });
};

var register = function () {
  $('#register_toggle').click(function(){
        console.log("working2");
    $('#frm_login').hide();
    $('#frm_register').show();
      $(".lazy").lazyload({
          effect : "fadeIn"
       });
  })
}



// button menu dropdown 
var nav_bar_ready = function () {
  $(".dropdown-toggle").on("click", function(event){
    $("#dropdown-menu-nav").show();
  });
  $(document).on("click", function(event) {
    $("#dropdown-menu-nav").hide();
  });
};

//button link.rss dropdown

var dropdown_ready2 = function () {
  $("#dropdown-menu-links2").hide();
  $("#dropdownMenu1").on("mouseover", function(event){
    $("#dropdown-menu-links2").show();
  });
  $("div.dropdown").on("mouseleave", function(event) {
    $("#dropdown-menu-links2").hide();
  });
};

// button img.rss dropdown 
var dropdown_ready = function () {
  $(".dropdown-toggle-bis").on("mouseover", function(event){
    $("#dropdown-menu-links").show();
  });
  $("div.dropdown").on("mouseleave", function(event) {
    $("#dropdown-menu-links").hide();
  });
};


// rss change-show inspiración
var change_name_rss = function(){
  var thing = $("#target-img1").text();
}

var show_rss_img = function() {
  $('.img-rss').hide();
  $('.img-rss').first().show();
  $("li.img-link-rss").on("click", function(event){
    var our_text = event.currentTarget.innerText;
    $("#target-img1").text(our_text);
    $('.img-rss').hide(); 
      switch($(this).data('type')){
        case 1: $("#1").show(); break;         
        case 2: $("#2").show(); break;
        case 3: $("#3").show(); break;
        case 4: $("#4").show(); break;
      };
   });
};




// rss change-show noticias
var change_name_linkrss = function(){
  var thingy = $("#target-img").text();
}

var show_rss_links = function() {
  $('.link-rss-div').hide();
  $('.link-rss-div').first().show();
  $("li.link-rss").on("click", function(event){
    var our_text = event.currentTarget.innerText;
    $("#target-img").text(our_text);
    $('.link-rss-div').hide(); 
      switch($(this).data('type')){
        case "a": $("#a").show(); break;         
        case "b": $("#b").show(); break;
        case "c": $("#c").show(); break;
        case "d": $("#d").show(); break;
        case "e": $("#e").show(); break;
        case "f": $("#f").show(); break;
      };
   });
};  

// particles home

var particles = function() {
$('#particles').particleground({
  minSpeedX: 0.1,
  maxSpeedX: 0.7,
  minSpeedY: 0.1,
  maxSpeedY: 0.7,
  directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
  directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
  density: 10000, // How many particles will be generated: one particle every n pixels
  dotColor: '#0cc',
  lineColor: '#0cc',
  particleRadius: 7, // Dot size
  lineWidth: 1,
  curvedLines: false,
  proximity: 200, // How close two dots need to be before they join
  parallax: true,
  parallaxMultiplier: 10, // The lower the number, the more extreme the parallax effect
  onInit: function() {},
  onDestroy: function() {}
});
};



var site_ready = function() {
  
  login();
  register();
  nav_bar_ready();
  dropdown_ready2();
  dropdown_ready();
  show_rss_img();
  show_rss_links();
  change_name_rss();
  change_name_linkrss
  particles();
};



$(document).ready(site_ready);
$(document).on("page:load", ready);

// first step: listener al click de links
// second step: get the value of the li
// third step: hide all the divs that don't match the value and show the one that matches
// $('#target-img').text('Dribbble'); break;


