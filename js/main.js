window.onload = function(){
  if(Modernizr.canvas) {

/*code here*/
$(function() {
			$('.banner').unslider();
    });

  }else {
    alert("This browser does not support canvas.");
    }
    console.log(Modernizr);
  };
