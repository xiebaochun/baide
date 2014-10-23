$(function () {
	var images=[];
preload(
"images/beijing-sheet0.png",
"images/tiaozhan-sheet0.png",
"images/beijing2-sheet0.png",
"images/kong-sheet0.png",
"images/shijian-sheet0.png",
"images/defen-sheet0.png",
"images/beijing3-sheet0.png",
"images/jieguo1-sheet0.png",
"images/tiaozhan2-sheet0.png",
"images/fenxiang-sheet0.png",
"images/tanchu-sheet0.png",
"images/tu1_right-sheet0.png",
"images/tu1_left-sheet0.png",
"images/tu2_right-sheet0.png",
"images/tu2_left-sheet0.png",
"images/tu3_right-sheet0.png",
"images/tu3_left-sheet0.png",
"images/tu4_right-sheet0.png",
"images/tu4_left-sheet0.png",
"images/tu5_right-sheet0.png",
"images/tu5_left-sheet0.png",
"images/tu6_right-sheet0.png",
"images/tu6_left-sheet0.png",
"images/tu7_right-sheet0.png",
"images/tu7_left-sheet0.png",
"images/tu8_right-sheet0.png",
"images/tu8_left-sheet0.png",
"images/tu9_right-sheet0.png",
"images/tu9_left-sheet0.png",
"images/tu10_right-sheet0.png",
"images/tu10_left-sheet0.png",
"images/jieguo2-sheet0.png",
"images/jieguo3-sheet0.png",
"images/jieguo4-sheet0.png",
"images/start-sheet0.png",
"images/jiazaibeijing-sheet0.png",
"images/jiazailogo-sheet0.png",
"images/jindubeijing-sheet0.png",
"images/redjindu-sheet0.png"
);
   // alert(jQuery(window).height());
   var index=2;
isStart=false;
var time=0;
var count=0;
var isSwiping=false;
var timeCallBack;
var audioPlayer=new Audio('media/1015.ogg');

 $("#bg").attr("src","images/beijing-sheet0.png");
//$("#bg").attr("src","images/beijing2-sheet0.png");
 $("#bg").css({"height":jQuery(window).height()+"px","width":"100%"});
 $("#share_img").css({"height":jQuery(window).height()+"px","width":"100%"});

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
     window.location.reload(true); 
   });
  $("#share_bt").click(function(){
	  $("#share_img").show();
	  setTimeout(function(){
	  	$("#share_img").hide();
	  },1000);
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
		  	
			    if(direction=="right"){

				    	if(isSwiping)return;
				  	isSwiping=true;
				  	audioPlayer.play();
				    console.log("You swiped " + direction );
				    index+=1;
		            count++;
		            $("#count_number").html(count);
				    if(!isStart){
				    	isStart=true;
				    	timeCallBack=setInterval(playGame,2000);
				    }

			    	$("#img_left").animate({
					
					left: "-=50%",
					top: "60%"
					}, 1000, function() {
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
				  }, 1000, function() {
				    $(this).css({"left":"15%","top":"20%","z-index":"0"});
				    $(this).attr("src","images/tu"+index+"_right-sheet0.png");
				  });
		    }
		  }
		});

		$("#img_left_next").swipe({
		  swipe:function(event, direction, distance, duration, fingerCount) {
		  	
		    
		    if(direction=="right"){
                   if(isSwiping)return;
				  	isSwiping=true;
				    console.log("You swiped " + direction );
		            audioPlayer.play();
				    index+=1;
				    count++;
		            $("#count_number").html(count);

			    	$("#img_left_next").animate({
					
					left: "-=50%",
					top: "60%"
					}, 1000, function() {
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
				  }, 1000, function() {
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
  		var percent_rt=(parseFloat(count)/10).toFixed(1);
  		$("#p2").html(percent_rt*10);
        if(percent_rt<=0.3){
           $("#img_result_").attr("src","images/jieguo1-sheet0.png");	
        }
        if(percent_rt<=0.5&&percent_rt>0.3){
           $("#img_result_").attr("src","images/jieguo2-sheet0.png");	
        }
        if(percent_rt<=0.8&&percent_rt>0.5){
           $("#img_result_").attr("src","images/jieguo3-sheet0.png");	
        }
        if(percent_rt<=1&&percent_rt>0.8){
           $("#img_result_").attr("src","images/jieguo4-sheet0.png");	
        }
  		
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
  			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}

});