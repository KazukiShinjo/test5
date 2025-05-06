document.addEventListener("DOMContentLoaded", function () {
  function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('nav').classList.toggle('in');

    const isMenuOpen = document.getElementById('nav').classList.contains('in');
    document.getElementById('line1').style.background = isMenuOpen ? "black" : "";
    document.getElementById('line2').style.background = isMenuOpen ? "black" : "";
  };
  document.getElementById('hamburger').addEventListener('click', function () {
    hamburger();
  });

  const links = document.querySelectorAll('#nav a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      if (document.getElementById('nav').classList.contains('in')) {
        hamburger();
      }
    });
  });
});