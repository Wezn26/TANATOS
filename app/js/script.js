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



//OUR-TEAM HOVER CRUMBS
(function () {
  var li1 = document.getElementById('li1'),
        li2 = document.getElementById('li2'),
        li3 = document.getElementById('li3'),
        li4 = document.getElementById('li4');

    var crumb1 = document.getElementById('crumb1'),
        crumb2 = document.getElementById('crumb2'),
        crumb3 = document.getElementById('crumb3'),
        crumb4 = document.getElementById('crumb4');



    function team(li, crumb) {
      li.onmouseover = function () {
        crumb.style.width = '15px';
        crumb.style.height = '15px';
        crumb.style.background = '#f7600e';
      };

      li.onmouseout = function () {
        crumb.style.width = '';
        crumb.style.height = '';
        crumb.style.background = '';
      };
    }

    team(li1, crumb1);
    team(li2, crumb2);
    team(li3, crumb3);
    team(li4, crumb4);

})();
