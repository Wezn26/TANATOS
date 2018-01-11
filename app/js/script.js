//MOBILE MENU
(function () {
  var menu = document.getElementById('menu'),
      input = document.getElementById('btnMenu');



  input.onclick = function () {
    menu.classList.toggle('show');
  };
})();

//SECTION AFTER HEADER DISPLAY
(function () {
  var click = document.getElementById('open'),
      section = document.getElementById('dropdown');

      click.addEventListener('click', function() {
         section.style.display = (section.style.display == 'block') ? 'none' : 'block';
      });
})();

//SLIDER
(function () {
  document.getElementById('slider-left').onclick = sliderLeft;
  document.getElementById('slider-right').onclick = sliderRight;
  var left = 0;
  var polosa = document.getElementById('polosa');

  function sliderLeft(){
  	left = left - 891;
  	if (left < - 1782) {
  		left = 0;
  	}
  	polosa.style.left = left + 'px';
  }

  function sliderRight() {
  	left = left + 891;
  	if (left > 0) {
  		left = - 1782;
  	}
  	polosa.style.left = left + 'px';
  }

  setInterval(sliderLeft, 5000);

})();
