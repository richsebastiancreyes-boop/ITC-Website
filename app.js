document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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