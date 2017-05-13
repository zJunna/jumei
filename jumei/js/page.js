//   列表页     请求数据，加载商品列表
		$.ajax({
			url: "page.json",
			type: "GET",
			success: function(res){
				var html = "";
				for(var i = 0; i < res.length; i++){
					html += '<li><a href ="#"><img src="'+res[i].img+'" ></a><div class="tit"><a href="#">'+res[i].title+'</a><div class="" style="margin-top: 20px;"><span id="t-p">'+res[i].price+'</span><span id ="tit-cart" >加入购物车</span></div></div></li>';
				}
				$("#m-p-img ul").html(html);
			}
		})
