$(function () {
   // alert(jQuery(window).height());
 $("#bg").attr("src","images/beijing-sheet0.png");

 $("#bg").css({"height":jQuery(window).height()+"px","width":"100%"});

 $("#start_bt").attr("src","images/tiaozhan-sheet0.png");

 $("#start_bt").css({"height":jQuery(window).height()*0.1+"px",
 	                  "width":"30%",
 	                   "left":"35%",
 	                   "top":"80%"});

  $("#start_bt").click(function(){
  	  $("#bg").attr("src","images/start-sheet0.png");
  	  $("#start_bt").hide();
  	  setInterval(function(){
  	  	$("#bg").attr("src","images/beijing2-sheet0.png");
  	  },1000);
  });

});