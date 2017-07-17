"use strict";

(function() {
	
	var Carousel = {
		props:{
			current_slide:1,
			total_slides:4
		},
		init:function(){
			//ADD INITIALIZER CODE HERE
			Carousel.bindEvents();
			Carousel.update();
		},
		bindEvents:function(){
			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});
			$("header nav ul li").on("click",function(){
				Carousel.props.current_slide = $(this).index()+1;
				Carousel.update();
			});
		},
		next:function(){
			//ADD NEXT CODE HERE
			Carousel.props.current_slide++;
			if(Carousel.props.current_slide > Carousel.props.total_slides){
				Carousel.props.current_slide = 1;
			}
			Carousel.update();
		},
		previous:function(){
			//ADD PREVIOUS CODE HERE
			Carousel.props.current_slide--;
			if(Carousel.props.current_slide < 1){
				Carousel.props.current_slide = Carousel.props.total_slides;
			}
			Carousel.update();
		},
		update:function(){
			//ADD UPDATE CODE HERE
			$(".carousel-cells").css("margin-left", "-"+100*(Carousel.props.current_slide-1)+"vw")
			$("header nav ul li").each(function(index){
				if(index+1 == Carousel.props.current_slide){
					$(this).addClass("focus")
				}else{
					$(this).removeClass("focus")
				}
			});
		}
	}
	$(function(){
		Carousel.init();
	})

})(window);