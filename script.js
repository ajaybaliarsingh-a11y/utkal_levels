

  // ── Sticky nav on scroll ──
  const nav = document.getElementById('main-nav');
  const stickyBar = document.getElementById('sticky-bar');
  const hero = document.querySelector('.hero');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Nav style
    nav.classList.toggle('scrolled', scrollY > 60);

    // Sticky bar (show after hero)
    if (hero) {
      stickyBar.classList.toggle('visible', scrollY > hero.offsetHeight * 0.6);
    }
  });

  // ── FAQ accordion ──
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── Scroll reveal ──
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // ── Form pseudo-submit ──
  document.querySelector('.form-submit').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.hero-card input');
    let filled = true;
    inputs.forEach(inp => { if (!inp.value.trim()) filled = false; });

    if (!filled) {
      this.textContent = 'Please fill all fields';
      this.style.background = '#B8DAEF';
      setTimeout(() => {
        this.textContent = 'Send Enquiry →';
        this.style.background = '';
      }, 2000);
    } else {
      this.textContent = '✓ Enquiry Sent!';
      this.style.background = '#1A7A4A';
      setTimeout(() => {
        this.textContent = 'Send Enquiry →';
        this.style.background = '';
      }, 3000);
    }
  });
