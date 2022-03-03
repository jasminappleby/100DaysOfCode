const form = document.getElementById('form');
const container = document.querySelector('.contact-container');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	container.innerHTML = '<p>Thank you for your contact! <br /> I\'ll get back to you soon!</p>';
});

