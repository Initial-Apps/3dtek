
function main() {

	(function () {
		'use strict';

		var width = window.innerWidth;  //window width

		// Preloader */
  		$(window).load(function() {

			// will first fade out the loading animation
			$("#status").fadeOut("slow");

			// will fade out the whole DIV that covers the website.
			$("#preloader").delay(500).fadeOut("slow").remove();
		})

		// initialize popovers
		$(function () {

			$('[data-toggle="popover"]').popover()
		})

		// Page scroll
		$('a.page-scroll').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 40
					}, 900);
					return false;
				}
			}
		});

		// Show Menu on Book
		$(window).bind('scroll', function() {
			var navHeight = $(window).height() - 100;
			if ($(window).scrollTop() > navHeight) {
				$('.navbar-default').addClass('on');
			} else {
				$('.navbar-default').removeClass('on');
			}
		});

		$('body').scrollspy({
			target: '.navbar-default',
			offset: 80
		})

		// Collapse Navbar
		var navbarCollapse = function() {
			if ($("#top-navbar").offset().top > 100) {
				$("#top-navbar").addClass("navbar-shrink");
			} else {
				$("#top-navbar").removeClass("navbar-shrink");
			}
		};
		// Collapse now if page is not at top
		navbarCollapse();
		// Collapse the navbar when page is scrolled
		$(window).scroll(navbarCollapse);

		$(document).ready(function() {
			$("#testimonial").owlCarousel({
				navigation : false, // Show next and prev buttons
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem:true
			});
		});


		$('.about-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			dots: true,
			autoplay: true,
			autoplaySpeed: 4000
		});

		// set slider based on width
		if(width < 768) {
			$('.image-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000
			});

			$('.gallery-slider-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				fade: true,
				asNavFor: '.gallery-slider-nav',
				autoplaySpeed: 6000
			});

		} else {
			$('.image-slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000
			});

			$('.gallery-slider-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: '.gallery-slider-nav',
				autoplaySpeed: 6000

			});

		}

		$('.gallery-slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 5,
			asNavFor: '.gallery-slider-for',
			arrows: true,
			dots: false,
			centerMode: true,
			focusOnSelect: true,
			autoplay: true,
			autoplaySpeed: 6000
		});

		// for mobile devices
		var banner = document.querySelector('.banner');
		var bannerVideo = document.querySelector('.banner__video');

		if (/iPad|iPhone|iPod/.test(navigator.platform)) {
			 banner.style.background = 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url("' + bannerVideo.poster + '")';
			 banner.style.backgroundSize = 'cover';
			 banner.style.backgroundPosition = 'center';
			 bannerVideo.style.display = 'none';
		}

	}());
}
main();
