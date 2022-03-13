const box = document.querySelector("#flame_box");

function addFlame() {
	let f = document.createElement("div");
	f.className = "flame";
	f.style.left = Math.random() * 100 + "%";
	f.style.animationDuration = Math.random() < 0.5 ? "3s" : "1.5s";
	f.onanimationend = function () {
		this.remove();
	};
	box.appendChild(f);
}

setInterval(function () {
	addFlame();

	let toDate = new Date();
	let tomorrow = new Date();
	tomorrow.setHours(24, 0, 0, 0);
	let diffMS = tomorrow.getTime() / 1000 - toDate.getTime() / 1000;
	let diffHr = Math.floor(diffMS / 3600);
	diffMS = diffMS - diffHr * 3600;
	let diffMi = Math.floor(diffMS / 60);
	diffMS = diffMS - diffMi * 60;
	let diffS = Math.floor(diffMS);
	let result = diffHr < 10 ? "0" + diffHr : diffHr;
	result += ":" + (diffMi < 10 ? "0" + diffMi : diffMi);
	result += ":" + (diffS < 10 ? "0" + diffS : diffS);
	result += ":" + Math.round(Math.random() * 89 + 10);
	document.querySelector(
		"#time"
	).innerHTML = `<span>Time left for today:</span>${result}`;
}, 1000 / 30);

