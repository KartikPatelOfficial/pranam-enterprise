/* Pranam Enterprise — minimal interactions */
window.clientFallback = function (initials) {
  var svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 80">' +
      '<rect width="160" height="80" rx="6" fill="#11233D"/>' +
      '<text x="80" y="50" text-anchor="middle" font-family="Manrope, Inter, sans-serif" ' +
        'font-size="26" font-weight="800" fill="#ffffff" letter-spacing="2">' + initials + '</text>' +
    '</svg>';
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

(function () {
  'use strict';

  // 1. Year stamp
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Mobile nav toggle
  var header = document.querySelector('.site-header');
  var toggle = header && header.querySelector('.nav-toggle');
  var nav    = header && header.querySelector('.primary-nav');

  function setOpen(open) {
    if (!header) return;
    header.setAttribute('data-open', open ? 'true' : 'false');
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setOpen(header.getAttribute('data-open') !== 'true');
    });
  }
  if (nav) {
    nav.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (a) setOpen(false);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header && header.getAttribute('data-open') === 'true') setOpen(false);
  });

  // 3. Reveal on scroll
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealNodes = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    revealNodes.forEach(function (n) { n.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    revealNodes.forEach(function (n) { io.observe(n); });
  }

  // 4. Scroll-spy nav active state
  var navLinks = document.querySelectorAll('.primary-nav a[href^="#"]');
  var sections = [];
  navLinks.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var el = id && document.getElementById(id);
    if (el) sections.push({ link: link, el: el });
  });
  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var match = sections.find(function (s) { return s.el === entry.target; });
          if (match) {
            navLinks.forEach(function (l) { l.classList.remove('is-active'); });
            match.link.classList.add('is-active');
          }
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s.el); });
  }

  // 5. Contact form (Web3Forms)
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (status) {
        status.hidden = true;
        status.classList.remove('is-error');
        status.textContent = '';
      }
      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;

      var data = new FormData(form);
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
        .then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (j) { return { ok: res.ok, body: j }; });
        })
        .then(function (r) {
          if (r.ok && r.body && r.body.success !== false) {
            form.reset();
            if (status) {
              status.hidden = false;
              status.textContent = 'Thanks — we’ll get back within one working day.';
            }
          } else {
            if (status) {
              status.hidden = false;
              status.classList.add('is-error');
              status.textContent = (r.body && r.body.message) || 'Something went wrong. Please call us at +91 99789 91070.';
            }
          }
        })
        .catch(function () {
          if (status) {
            status.hidden = false;
            status.classList.add('is-error');
            status.textContent = 'Network error. Please call us at +91 99789 91070.';
          }
        })
        .then(function () {
          if (btn) btn.disabled = false;
        });
    });
  }
})();
