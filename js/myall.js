
			$(document).ready(function() {
				$.fn.fullpage({
					slidesColor: ['#f5b8b0', '#f5b8b0', '#7BAABE', '#f90', '#fabdc6'],
					anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
					menu: '#menu',
					navigation: true,
					loopBottom: true,
					afterLoad: function(anchorLink, index) {
						if(index == 2) {
							$('.section2').find('.mas').delay(600).addClass("bounceInLeft")
						}
						if(index == 3) {
							$('.section3').find('h3').delay(600).addClass("bounceInRight")
						}
						if(index == 4) {
							$('.section4').find('.project').delay(600).addClass("zoomInRight")
						}
						if(index == 5) {
							$('.section5').find('.wu1').delay(800).addClass("zoomInDown")
						}
					}
				});
				$(".tableCell").css("height",$(document.body).height());
				console.log($(document.body).height());
				console.log($(".tableCell").css("height"));
				
			});
	