$('.navbar-main-collapse').bind('hide.bs.collapse', function(){
  $(".navbar-brand>img").show();
})
$('.navbar-main-collapse').bind('show.bs.collapse', function(){
  $(".navbar-brand>img").hide();
})
