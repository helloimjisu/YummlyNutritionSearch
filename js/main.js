$('#searchRecipesButton').on('click', function(e) {
	e.preventDefault();
    $('.reciperesults').slideDown();
    $('html, body').animate({
		scrollTop: $(".reciperesults").offset().top
    }, 500);
 });

$('.faq h3').on('click', function(e) {
	e.preventDefault();
	console.log("click!")
    $(this).next('div').slideToggle();
 });

// close modal events

$('.searchModalDialog').click(function () {
	window.location.hash = "#close";
});

$('.searchModalDialog div').click(function (event) {
	event.stopPropagation();
});

$('body').keydown(function (event) {
	if (event.keyCode === 27) {
		window.location.hash = "#close";
	}
});