// contact.js — side nav + contact form validation

const menuicon = document.getElementById('menuicon');
const sidenav = document.getElementById('sidenav');
const closenav = document.getElementById('closenav');

if (menuicon) {
  menuicon.addEventListener('click', () => {
    sidenav.classList.remove('translate-x-full');
  });
}
if (closenav) {
  closenav.addEventListener('click', () => {
    sidenav.classList.add('translate-x-full');
  });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();

    if (!name || !email || !subject) {
      alert('Please fill Name, Email and Subject.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert(`Thanks ${name}, your message has been received (demo).`);
    contactForm.reset();
  });
}
