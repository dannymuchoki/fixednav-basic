		var height = $('.header').height();
		var sidebarheight = $('.column3').height();

		$(window).scroll(function()
			{
				if($(this).scrollTop() > height )
					{
						$('.header').addClass("fixed");
					}
				else
					{
						$('.header').removeClass("fixed");
					}
			});
			
		$(window).scroll(function()
			{
				if($(this).scrollTop() > sidebarheight )
					{
						$('.custom-widgets').addClass("fixed-right");
					}
				else
					{
						$('.custom-widgets').removeClass("fixed-right");
					}
			});