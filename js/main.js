$(function () {
   // alert(jQuery(window).height());
   var index=2;
isStart=false;
var time=0;
var count=0;
var isSwiping=false;
var timeCallBack;
 $("#bg").attr("src","images/beijing-sheet0.png");
//$("#bg").attr("src","images/beijing2-sheet0.png");
 $("#bg").css({"height":jQuery(window).height()+"px","width":"100%"});

 $("#start_bt").attr("src","images/tiaozhan-sheet0.png");

 $("#start_bt").css({"height":jQuery(window).height()*0.1+"px",
 	                  "width":"30%",
 	                   "left":"35%",
 	                   "top":"80%"});
  
  $("#replay_bt").click(function(){
	    // $("#replay_bt").hide();
  	  // 	$("#share_bt").hide();
  	  // 	$("#img_result").hide();
    	// $("#bg").attr("src","images/beijing-sheet0.png");
     //    $("#start_bt").show();
     window.location.reload(false); 
   });
  $("#start_bt").click(function(){
  	  console.log("start click");
  	  $("#bg").attr("src","images/start-sheet0.png");
  	  $("#start_bt").hide();
  	  setTimeout(function(){
  	  	$("#count").show();
  	  	$("#time").show();
  	  	$("#bg").attr("src","images/beijing2-sheet0.png");
  	  	$("#img_left").attr("src","images/tu1_left-sheet0.png");
  	  	$("#img_right").attr("src","images/tu1_right-sheet0.png");

        $("#img_left_next").attr("src","images/tu2_left-sheet0.png");
  	  	$("#img_right_next").attr("src","images/tu2_right-sheet0.png");

  	  	$(".game_img").show();

  	  	$("#img_left").swipe({
		  swipe:function(event, direction, distance, duration, fingerCount) {
		  	if(isSwiping)return;
		  	isSwiping=true;
		    console.log("You swiped " + direction );
		    index+=1;
            count++;
            $("#count_number").html(count);
		    if(!isStart){
		    	isStart=true;
		    	timeCallBack=setInterval(playGame,2000);
		    }
		    if(direction=="right"){
			    	$("#img_left").animate({
					
					left: "-=50%",
					top: "60%"
					}, 5000, function() {
					// Animation complete.
					$(this).css({"left":"15%","top":"20%","z-index":"0"});
                    $(this).attr("src","images/tu"+index+"_left-sheet0.png");
					$("#img_left_next").css("z-index","1");
		  	  	    $("#img_right_next").css("z-index","1");
		  	
                     isSwiping=false;
                     end();
					});

		  	  	  $("#img_right").animate({
				    
				    left: "+=50%",
				    top: "60%"
				  }, 5000, function() {
				    $(this).css({"left":"15%","top":"20%","z-index":"0"});
				    $(this).attr("src","images/tu"+index+"_right-sheet0.png");
				  });
		    }
		  }
		});

		$("#img_left_next").swipe({
		  swipe:function(event, direction, distance, duration, fingerCount) {
		  	if(isSwiping)return;
		  	isSwiping=true;
		    console.log("You swiped " + direction );

		    index+=1;
		    count++;
            $("#count_number").html(count);
		    
		    if(direction=="right"){
			    	$("#img_left_next").animate({
					
					left: "-=50%",
					top: "60%"
					}, 5000, function() {
					// Animation complete.
					$(this).css({"left":"15%","top":"20%","z-index":"0"});
					$(this).attr("src","images/tu"+index+"_left-sheet0.png");
					$("#img_left").css("z-index","1");
		  	  	    $("#img_right").css("z-index","1");

		  	
                    isSwiping=false;
                    end();
					});

		  	  	  $("#img_right_next").animate({
				    
				    left: "+=50%",
				    top: "60%"
				  }, 5000, function() {
				    $(this).css({"left":"15%","top":"20%","z-index":"0"});
				    $(this).attr("src","images/tu"+index+"_right-sheet0.png");
				  });
		    }
		  }
		});
  	  	
  	  	
  	  },1000);

  });




  function playGame(){
  	console.log("click");
  	time++;
  	$("#time_number").html(time);
     end();
  
  }
  function end(){
  	if(time>=8){
  		$("#p1").html(count);
  		time=0;
  		count=0;
  		 index=2;
         isStart=false;
        clearInterval(timeCallBack);
        $("#time_number").html(time);
        $("#count_number").html(count);
    	$("#count").hide();
  	  	$("#time").hide();
  	  	$(".game_img").hide();
  	  	$("#replay_bt").show();

  	  	$("#share_bt").show();
  	  	$("#img_result").show();
    	$("#bg").attr("src","images/beijing3-sheet0.png");
    }
  }

});