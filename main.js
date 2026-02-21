/* Scroll reveal */
(function () {
  var reveals = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(function (el) { observer.observe(el); });
})();

/* Email obfuscation (contact page only) */
(function () {
  var el = document.getElementById('email-link');
  if (!el) return;
  var parts = ['james', 'analyticaldatasystems', 'com'];
  var assembled = false;
  el.addEventListener('click', function (e) {
    e.preventDefault();
    if (!assembled) {
      var addr = parts[0] + '@' + parts[1] + '.' + parts[2];
      el.href = 'mailto:' + addr;
      el.textContent = addr;
      el.style.cursor = 'default';
      assembled = true;
    } else {
      window.location.href = el.href;
    }
  });
})();
