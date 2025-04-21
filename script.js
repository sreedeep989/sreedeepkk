// FAQ Toggle Functionality
document.querySelectorAll('.faq-item .question').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });
  
  // Contact Form
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    alert(`Thank you, ${name}! We'll get back to you at ${email}.`);
  });