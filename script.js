


$switchOn = 

$('.button2').click(function(){
	$(this).toggleClass('active');
	if ($(this).hasClass('active')) 
	{		
			
			$('#drag').animate({"left": "0",
								"width": "100%",
								"height": "45px"}, 1000);
			$('#drag').addClass("left-bar");
			$('.menu').removeClass("not-visible");
			$(".menu>>li>a").addClass("menu_black");
			$('#expand_me').addClass('hidden');
	}
	else
	{
	

			
			$('#drag').animate({
								"left": "+=47vw",
								"width": "-=94.75vw",
								"height": "100vh"},500);
			$('#expand_me').removeClass('hidden');
			$('#drag').removeClass("left-bar");
			$('.menu').addClass("not-visible");
	}

	});

	$('.button1').click(function(){
	$(this).toggleClass('active');
	if ($(this).hasClass('active')) 
	{		
			$
			$('#drag').animate({"left": "0",
								"width": "100%",
								"height": "45px"}, 500);
			$('#drag').addClass("right-bar");
			$('.menu').removeClass("not-visible");
			$(".description").addClass('hidden-right');
	}
	else
	{
	

			
			$('#drag').animate({
								"left": "+=47vw",
								"width": "-=94.75vw",
								"height": "100vh"},500);
			$('.description').removeClass('hidden-right');
			$('#drag').removeClass("right-bar");
			$('.menu').addClass("not-visible");

	}

	});