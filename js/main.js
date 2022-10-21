$( document ).ready(function() {
    // console.log( "ready!" );
    // const carousel = new bootstrap.Carousel('#myCarousel');
    const carousel = new bootstrap.Carousel(myCarouselElement, {
	  interval: 10,
	  wrap: false
	});
});