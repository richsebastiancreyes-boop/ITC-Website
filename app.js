document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 24;
          window.scrollTo({ top, behavior: 'smooth' });
          history.replaceState && history.replaceState(null, '', href);
        }
      }
    });
  });

  document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('error', function () {
      img.style.display = 'none';
      const p = document.createElement('div');
      p.style.background = '#0f172a';
      p.style.width = '100%';
      p.style.height = '100%';
      p.style.position = 'absolute';
      p.style.inset = '0';
      p.style.opacity = '0.9';
      if (img.parentNode) img.parentNode.appendChild(p);
    });
  });

  const signup = document.getElementById('signup');
  if (signup) {
    signup.addEventListener('submit', function (e) {
      e.preventDefault();
      const f = e.currentTarget;
      const input = f.querySelector('input[type="email"]');
      if (!input || !input.value) {
        alert('Please enter an email address.');
        return;
      }
      const msg = document.createElement('div');
      msg.textContent = 'Thanks — we received your interest. Check your email for updates.';
      msg.style.marginTop = '12px';
      msg.style.padding = '10px';
      msg.style.background = '#065f46';
      msg.style.color = '#fff';
      msg.style.borderRadius = '8px';
      f.replaceWith(msg);
    });
  }
});