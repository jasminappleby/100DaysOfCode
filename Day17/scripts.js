const countEl = document.getElementById('count');
const body = document.body;

setInterval(createFlower, 50);
updateVisitCount();


function updateVisitCount() {
	fetch('https://api.countapi.xyz/hit/jasmin-appleby-holdhamnetlifyapp/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}


function createFlower() {
	const flower = document.createElement('i');
	flower.classList.add('far');
	flower.classList.add('fa-heart');
	flower.style.left = Math.random() * window.innerWidth + 'px';
	flower.style.animationDuration = Math.random() * 3 + 2 + 's';
	flower.style.opacity = Math.random();
	flower.style.fontSize = Math.random() * 10 + 10 + 'px';
	
	document.body.appendChild(flower);
	
	setTimeout(() => {
		flower.remove();
	}, 5000)
}