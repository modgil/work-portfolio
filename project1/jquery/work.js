$(function(){
$(".work").on("mouseover",function(){
    $(this).siblings().css("position","static"); 	
	$(this).css("width","1000px");
	$(this).css("height","400px");
	$(this).css("top","0px")
	$(this).css("border","10px solid black");
	$(this).css("border-radius","50%")
	$(this).css("-webkit-box-shadow","green 8px 12px 12px ");
});
     $(".work").on("mouseleave",function(){
    $(this).siblings().css("position","static"); 	
	$(this).css("width","250px");
	$(this).css("height","100px");
	$(this).css("-webkit-box-shadow","rgba(0,0,0,0.0) 8px 8px 8px");
    $(this).toggle(2000).fadeIn(3000);


      });
  

   $("#tut-logo1").on("click",function(){
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  $(".tutors #dev").fadeIn(4000);
  $(".tutors #dev").siblings().fadeOut(2000);
     });
  $("#tut-logo2").on("click",function(){
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  $(".tutors #bucky").fadeIn(4000);
  $(".tutors #bucky").siblings().fadeOut(2000);
     });
  $("#tut-logo3").on("click",function(){
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  $(".tutors #levelup").fadeIn(4000);
  $(".tutors #levelup").siblings().fadeOut(2000);
     });
  
      var $active=$(".contact .active");
       $(".social-logo").on("click",function(){
       $(this).siblings().removeClass("active");
       $(this).addClass("active");
            });
  


});