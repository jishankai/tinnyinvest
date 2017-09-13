$(function(){
	//1.返回顶部
	var windowW=$(window).width();
	if(windowW>1024){
		$(".newTo-top").hover(function(){
		$(this).css({
			"background":"none",
			"backgroundColor":"#73a3f1"
		})
		$(this).html("顶部")
	},function(){
		$(this).css({
			"background":"url(img/newTo-top.png) no-repeat"
		})
		$(this).html(" ")
	})
	}
	
	 $(document).ready(function() {
	    //首先将#back-to-top隐藏
	    $("#back-to-top").hide();
	    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
	    $(function() {
	    	var windowH=$(window).height()/3;
	      $(window).scroll(function() {
	        if ($(window).scrollTop() > windowH) {
	          $("#back-to-top").fadeIn(300);
	        } else {
	          $("#back-to-top").fadeOut(200);
	        }
	      });
	      //当点击跳转链接后，回到页面顶部位置
	      $("#back-to-top").click(function() {
	        $('body,html').animate({
	          scrollTop: 0
	        },
	        500);
	        return false;
	      });
	    });
  	});
	
	//2.手机端导航更多点击
	$(".more_btn").click(function(){
		$(".slider_box").slideToggle(100);
	})
	//3.手机端滚动条滚动时影藏下拉菜单
$(window).scroll(function(){
	$(".slider_box").hide()
})
})
