window.onload = function(){
  if(Modernizr.canvas) {

/*code here*/
$(function() {
			$('.banner').unslider({
        autoplay: true,
        nav: false,
        arrows: false
      });
    });




    // show and hide sub menu

	$(function(){

	    $('nav ul li').hover(

	        function () {

	            //show its submenu

	            $('ul', this).slideDown(150);

	        },

	        function () {

	            //hide its submenu

	            $('ul', this).slideUp(150);

	        }

	    );

	});

  }else {
    alert("This browser does not support canvas.");
    }
    console.log(Modernizr);
  };
