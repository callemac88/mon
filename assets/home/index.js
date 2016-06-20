import $ from 'jquery'

const $container = $('#container')
var template_home = require('assets/home/template.jade')
var bgWidth = 0
module.exports.home = function () {
	$container.html(template_home).promise().done(function () {
		
		setTimeout(function () {
			var quantity_images = $('.ImgBackground-img').length
			var width_img = $($('.ImgBackground-img')[0]).width()
			var ImgBackground_scroll = ( quantity_images * width_img )
			bgWidth = ImgBackground_scroll
			$('.ImgBackground').css('width', ImgBackground_scroll+'px')
		}, 1000)
	})
}

$( window ).resize(function () {
	var quantity_images = $('.ImgBackground-img').length
	var width_img = $($('.ImgBackground-img')[0]).width()
	var ImgBackground_scroll = ( quantity_images * width_img )
	bgWidth = ImgBackground_scroll
	$('.ImgBackground').css('width', ImgBackground_scroll)
})

$(window).scroll(function() {
	if( $(window).scrollLeft() >= ( bgWidth - $(window).width()) ) {
		$(window).scrollLeft((bgWidth/2)-$(window).width())
	} else if ( $(window).scrollLeft() == 0 ) {
		$(window).scrollLeft(bgWidth/2)
	}
})
