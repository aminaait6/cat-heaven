
document.addEventListener('DOMContentLoaded', function () {
  // Dark mode toggle
  const modeToggle = document.getElementById('modeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial mode
  if (
    localStorage.getItem('darkMode') === 'true' ||
    (localStorage.getItem('darkMode') === null && prefersDark)
  ) {
    document.body.classList.add('dark');
    modeToggle.checked = true;
  }

  modeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark', this.checked);
    localStorage.setItem('darkMode', this.checked);
  });
document.querySelectorAll('.gallery-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});

  // Form submission
  const catForm = document.getElementById('catForm');
  if (catForm) {
    catForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.name.value.trim();
      const url = this.catphotourl.value.trim();
      const desc = this.description.value.trim();

      if (!url.startsWith('http')) {
        showAlert('Please enter a valid photo URL starting with http or https.', 'error');
        return;
      }

      if (!name || !desc) {
        showAlert("Please fill out all required fields.", "error");
        return;
      }

      showAlert(`Thanks for sharing ${name}'s photo! 🐱`, 'success');
      this.reset();
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length <= 1) return; // Skip empty anchors
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Alert function
  function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    // Styling
    Object.assign(alert.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '1rem 1.5rem',
      borderRadius: '8px',
      backgroundColor: type === 'error' ? '#ff6b6b' : '#51cf66',
      color: 'white',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: '1000',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      animation: 'fadeIn 0.3s ease-out',
    });
if (!document.querySelector(targetId)) return;

    const icon = document.createElement('i');
    icon.className =
      type === 'error' ? 'fas fa-exclamation-circle' : 'fas fa-check-circle';
    alert.prepend(icon);

    document.body.appendChild(alert);

    // Auto remove after 4s
    setTimeout(() => {
      alert.style.transition = 'opacity 0.3s ease';
      alert.style.opacity = 0;
      setTimeout(() => alert.remove(), 300);
    }, 4000);
  }
});
