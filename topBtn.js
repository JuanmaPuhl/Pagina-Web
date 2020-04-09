$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    }
    else{
      $('#topBtn').fadeOut();
    }
  });
  console.log("Entre al script");
  $("#topBtn").click(function(){
    $('html, body').animate({scrollTop: 0},800);
  });
});
