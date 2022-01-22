const body = document.body;
const endTime = new Date('December 31 2022 23:59:59');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


setInterval(updateCountdown, 1000)
setInterval(createGerm, 50);


function updateCountdown() {
	const startTime = new Date();
	const diff = endTime - startTime;
	const days = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
	const seconds = Math.floor(diff / 1000) % 60;
	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours < 10 ? '0'+hours : hours;
	minutesEl.innerHTML = minutes < 10 ? '0'+minutes : minutes;
	secondsEl.innerHTML = seconds < 10 ? '0'+seconds : seconds;
}

function createGerm() {
	const germ = document.createElement('i');
	germ.classList.add('fas');
	germ.classList.add('fa-head-side-cough');
	germ.style.left = Math.random() * window.innerWidth + 'px';
	germ.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
	germ.style.opacity = Math.random();
	germ.style.fontSize = Math.random() * 10 + 10 + 'px';
	
	document.body.appendChild(germ);
	
	setTimeout(() => {
		germ.remove();
	}, 5000)
}