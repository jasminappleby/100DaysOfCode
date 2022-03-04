const ratingsEl = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

ratingsEl.forEach(el => {
	el.addEventListener('click', () => {
		ratingsEl.forEach(innerEl => {
			innerEl.classList.remove('active');
		});
		
		el.classList.add('active');
	});
});

sendBtn.addEventListener('click', () => {
	panel.innerHTML = `
		<strong>Thank you for your feedback!</strong>
		<p>We will use this result to improve our customer support performance.</p>
		<button class="btn">Done</button>
	`;
});

