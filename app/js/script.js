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
