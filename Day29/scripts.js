let poke_out = document.getElementById('poke_out');
let poke_in = document.getElementById('poke_in');
let progress = document.getElementById('progress');
let curr_id = 0;

const getPic = () => {
	let append = poke_in.value.toLowerCase().replace(/[ _]/g, '-');
	makeRequest(append);
}

const next = () => {
	if (curr_id == 898) {
		makeRequest(10001);
	} else {
		makeRequest(curr_id + 1)
	}
}

const previous = () => {
	if (curr_id > 1) {
		makeRequest(curr_id - 1);
	} else {
		makeRequest(898);
	}
}
	
const makeRequest = (append) => {
	let url = "https://pokeapi.co/api/v2/pokemon/" + append;
	progress.innerHTML = "Retrieving..."
	fetch(url)
		.then(response => {
			if (response.status >= 200 && response.status < 300) {
				return response.json();
			} else {
				return null;
			}
		})
		.then(data => {
			if (data) {
				poke_out.src = data.sprites.front_default;
				progress.innerHTML = "Enter another Pokemon!";
				curr_id = data.id;
				console.log(curr_id);
			} else {
				progress.innerHTML = "Not found"
			}
		})
}