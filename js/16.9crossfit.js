$('.navbar-main-collapse').bind('hide.bs.collapse', function(){
  $(".navbar-brand").addClass("fade").addClass("in");
})
$('.navbar-main-collapse').bind('show.bs.collapse', function(){
  if ($('.navbar-nav').width()) return;
  $(".navbar-brand").removeClass("in");
  $(".navbar-brand").addClass("fade");
})
