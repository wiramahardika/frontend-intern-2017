$(document).ready(function () {
  $('#login-form').validate({
    rules: {
      username_or_email: {
        minlength: 4,
        required: true
      },
      password: {
        minlength: 6,
        required: true
      }
    },
    highlight: function (element) {
      $(element).closest('.form-group').removeClass('success').addClass('error');
    },
    success: function (element) {
        $(element).closest('.form-group').removeClass('error').addClass('success');
    }
  });
});

//hide sidebar
function hide_sidebar(){
    $("#sidebar").removeClass("slide-in");
    $("#show-sidebar-trigger").fadeIn(20);
    $("#hide-sidebar-trigger").addClass("hide");
    $("#overlay").fadeOut(100);
    $("body").removeClass("lock-scrolling");
}

//hide search bar
function hide_search(){
    $("#search-bar").removeClass("slide-in");
    $("#show-search-trigger").fadeIn(20);
    $("#hide-search-trigger").addClass("hide");
    $("#overlay").fadeOut(100);
    $("body").removeClass("lock-scrolling");
}

//hide every pop up menu
function hide_everything(){
    hide_sidebar();
    hide_search();
}

//show sidebar
function show_sidebar(){
    hide_everything();
    $("#sidebar").addClass("slide-in");
    $("#show-sidebar-trigger").fadeOut(20);
    $("#hide-sidebar-trigger").removeClass("hide");
    $("#overlay").fadeIn(250);
    $("body").addClass("lock-scrolling");
}

//show search bar
function show_search(){
    hide_everything();
    $("#search-bar").addClass("slide-in");
    $("#show-search-trigger").fadeOut(20);
    $("#hide-search-trigger").removeClass("hide");
    $("#overlay").fadeIn(250);
}
