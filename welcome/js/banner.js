
	// 初始化轮播
				$(function() {
				// 初始化轮播
				$(window).load(function() {
					$("#myCarousel").carousel('cycle');
					$("#ssCarousel").carousel('cycle');
					$("#hpCarousel").carousel('cycle');
					$("#shCarousel").carousel('cycle');
					$("#hotCarousel").carousel('cycle');
					$("#hot2Carousel").carousel('cycle');
				});
				// 停止轮播
				$(".box").mousemove(function() {
					$("#myCarousel").carousel('pause');
					$("#ssCarousel").carousel('pause');
					$("#hpCarousel").carousel('pause');
					$("#shCarousel").carousel('pause');
					$("#hotCarousel").carousel('pause');
					$("#hot2Carousel").carousel('pause');
				});
				$(".box").mouseout(function() {
					$("#myCarousel").carousel('cycle');
					$("#ssCarousel").carousel('cycle');
					$("#hpCarousel").carousel('cycle');
					$("#shCarousel").carousel('cycle');
					$("#hotCarousel").carousel('cycle');
					$("#hot2Carousel").carousel('cycle');
					
				});
				// 循环轮播到上一个项目
				$(".left-l").click(function() {
					$("#myCarousel").carousel('prev');
					$("#hpCarousel").carousel('prev');
					$("#ssCarousel").carousel('prev');
				});
				// 循环轮播到下一个项目
				$(".right-r").click(function() {
					$("#myCarousel").carousel('next');
					$("#hpCarousel").carousel('next');
					$("#ssCarousel").carousel('next');
				});
				// 循环轮播到某个特定的帧 
				$(".dian").mousemove(function() {
					$("#myCarousel").carousel($(this));
				});
		});
		