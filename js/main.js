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
  	  console.log("start click");
  	  $("#bg").attr("src","images/start-sheet0.png");
  	  $("#start_bt").hide();
  	  setTimeout(function(){
  	  	$("#bg").attr("src","images/beijing2-sheet0.png");
  	  	$("#img_left").attr("src","images/tu1_left-sheet0.png");
  	  	$("#img_right").attr("src","images/tu1_right-sheet0.png");

        $("#img_left_next").attr("src","images/tu2_left-sheet0.png");
  	  	$("#img_right_next").attr("src","images/tu2_right-sheet0.png");

  	  	$(".game_img").show();

  	  	$(".game_img").swipe({
		  swipe:function(event, direction, distance, duration, fingerCount) {
		    console.log("You swiped " + direction );
		    if(direction=="right"){
			    	$("#img_left").animate({
					opacity: 0.5,
					left: "-=100",
					top: "+=200"
					}, 1000, function() {
					// Animation complete.
					$(this).css({"left":"10%","top":"10%","z-index":"0"});
					$("#img_left_next").css("z-index","1");
		  	  	    $("#img_right_next").css("z-index","1");
					});

		  	  	  $("#img_right").animate({
				    opacity: 0.5,
				    left: "+=100",
				    top: "+=200"
				  }, 1000, function() {
				    $(this).css({"left":"10%","top":"10%","z-index":"0"});
				  });
		    }
		  }
		});
  	  	$("#img_right").on("swipe",function(){
      



		  






		});
  	  	// setInterval(playGame,1000/60);
  	  },1000);
  });

  function playGame(){
  	console.log("update");
    

  }

});