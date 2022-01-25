const change = document.getElementById('change');
const colour = document.getElementById('colour');
const body = document.body;

change.addEventListener('click', changeBG);

function changeBG() {
	const col1 = getRandomRGB();
	const col2 = getRandomRGB();
	const col3 = getRandomRGB();
	const colourString = `rgb(${col1}, ${col2}, ${col3})`;
	body.style.background = colourString;
	colour.innerText = colourString;
}

function getRandomRGB() {
	return Math.floor(Math.random() * 256);
}