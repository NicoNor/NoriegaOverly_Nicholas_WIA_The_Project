window.onload = function(){
  if(Modernizr.canvas) {

/*code here*/
$(function() {
			$('.banner').unslider({
        nav: false,
        arrows: false
      });
    });

  }else {
    alert("This browser does not support canvas.");
    }
    console.log(Modernizr);
  };
