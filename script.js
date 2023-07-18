const navbarLinks = document.querySelectorAll('#navbar a');

navbarLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const initialPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop;
    const distance = targetPosition - initialPosition;
    const duration = 1000;

    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, initialPosition, distance, duration));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  });
});

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const successMessage = 'Thank you for your message. I will get back to you soon.';

});