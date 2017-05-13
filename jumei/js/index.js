$(function() {
	/*我的聚美下拉列表*/
	$(".my-pull1").hover(function() {

		$(".my-pull").show(20,function(){});
	}, function() {
		$(".my-pull").hide(20,function(){});
	})


	/*
 * 更多下拉菜单
 */
	$(".more").hover(function() {

		$(".more-menu").show();

	}, function() {
		$(".more-menu").hide();

	})




	/*

	 * 美妆商城的下拉菜单
	 *
	 *
	 * */


	$(".beauty-menu").hover(function(){
		$(".bd-menu-box").show();
	},function(){
		$(".bd-menu-box").hide();
	})




	/*

	 * 轮播图
	 *
	 * */






			var aBtn = $("#banner").find("ol").find("li");
			var oUl = $("#banner").find("ul");
			var aLi = oUl.find("li");

			//加自动播放

			var iNow = 0; //记录当前滚动到第几张图片
			var timer = null; //定时器

			aBtn.click(function(){
				iNow = $(this).index();
				tab();
			})

			$("#banner").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})

			function tab(){
				aBtn.attr("class", "");

				if(iNow == aBtn.size()){
					aBtn.eq(0).attr("class", "active");
				}
				aBtn.eq(iNow).attr("class", "active");
				oUl.animate_buffer({left: -1920 * iNow}, function(){
					if(iNow == aBtn.size()){
						oUl.css("left", 0);
						iNow = 0;
					}
				});
			}


			//启动定时器
			timer = setInterval(timerInner, 2000);


			function timerInner(){
				//每隔两秒
				iNow++;
				tab();
			}






































	/*

	 * 今天疯抢     明天预告
	 *
	 * */



	//请求数据，加载商品列表
		$.ajax({
			url: "index-today1.json",
			type: "GET",
			success: function(res){
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li class="goods_item"  ><a href = "#"><img id = "goods-img" src="'+res[i].img+'" alt=""></a></li>';
				}
				$(".man-center-img #today1").html(html);
			}
		})

	

	
	
	
	/*
	 每日必看图
	 * 
	 * */
	
	
	//请求数据，加载商品列表
		/*$.ajax({
			url: "must.json",
			type: "GET",
			success: function(res){
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<div id="day-tab-cen"><a href="#">'<img src="'+res[i].img+'" alt=""></a><div class="tab-cen-text"><div class="time-box"><span id="time-txt">距特卖结束</span><span>00<i>:</i>00<i>:</i>00<i>:</i>00</span></div><a href = "#" id="referral">【香港直邮】娇兰 (Guerlain)法式之吻玫瑰有色唇膏2.8g，（多色可选）娇兰新出以玫瑰花为主题的有色润唇膏，富含玫瑰精油萃取，同时结合了为双唇增色与护理的功效。呵护过的双唇，变得有如玫瑰花瓣般柔软、光滑而鲜嫩；淡淡刷上唇彩后，嘴部立即闪耀著愉悦、温柔而自然的光泽。</a><div class="price-box"><span id="price">￥199</span><div class = "all-cart-wrap"><a href="#" class="all-cart" >加入购物车</a></div></div><div class="to-g-num"><span id="to-g"><img src = "img/029_big.jpg"></span><span id="to-num"><i>7</i>人已经购买</span></div></div></div>';
				}
				$("#day-tab-cen-box").html(html);
			}
		})
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	

})

