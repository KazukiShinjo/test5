window.addEventListener('scroll', function () {
  const textElements = document.querySelectorAll('.fade-in-text');

  textElements.forEach((element, index) => {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      element.style.setProperty('--delay', index);
      element.classList.add('visible');
    }
  });
});