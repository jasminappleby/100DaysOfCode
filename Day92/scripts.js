import * as SunCalc from "https://cdn.skypack.dev/suncalc@1.8.0";

let cannotRetrieveLocation;

getUserInfo((lngLat) => {
	const now = new Date();
	
	let todayStart = new Date().setHours(0,0,0,0);
	let todayEnd = new Date().setHours(23,59,59,0);
	let today = SunCalc.getTimes(todayStart, lngLat.lat, lngLat.lng);
	let todayLength = today.sunset-today.sunrise;
	
	let shortStart = new Date(2021,11,21).setHours(0,0,0,0);
	let shortEnd = new Date(2021,11,21).setHours(23,59,59,0);
	let short = SunCalc.getTimes(shortStart, lngLat.lat, lngLat.lng);
	let shortLength = short.sunset - short.sunrise;
	
	let morning = millisToMinutesAndSeconds(short.sunrise-today.sunrise,['ealier','later']);
	let timeInTheMorning = `Mornings start ${morning.str} ${morning.changed}`

	console.log(today.sunset-short.sunset)
	let evening = millisToMinutesAndSeconds(today.sunset-short.sunset,['ealier','later']);
	let timeInTheEvening = `and days end ${evening.str} ${evening.changed}.`
	
	let {str, changed} = millisToMinutesAndSeconds(todayLength - shortLength);
	document.querySelector("h1").innerText = `${str} ${changed}`;
});


function millisToMinutesAndSeconds(ms, label = ["shorter","longer"]) {
	const changed = ms < 0 ? label[0] : label[1]
	ms = Math.abs(ms);
	var d = new Date(1000 * Math.round(ms / 1000)); // round to nearest second
	const h =
		d.getUTCHours() > 0
			? `${d.getUTCHours()} hour${d.getUTCHours() > 1 ? "s" : ""}`
			: "";
	const m =
		d.getUTCMinutes() > 0
			? `${d.getUTCMinutes()} minute${d.getUTCMinutes() > 1 ? "s" : ""}`
			: "";
	const s =
		d.getUTCSeconds() > 0
			? `${d.getUTCSeconds()} second${d.getUTCSeconds() > 1 ? "s" : ""}`
			: "";
	const and2 = (m !== "" || h !== "") && s !== '' ? " and " : "";
	const and1 = h !== "" ? " and " : "";
	return {str: `${h}${and1}${m}${and2}${s}`, changed};
	
}

function getUserInfo(cb) {
	fetch("https://ipinfo.io/json")
		.then((res) => res.json())
		.catch((err) => {
			return {
				ip: "85.83.129.143",
				city: "Skodstrup",
				region: "Central Jutland",
				country: "DK",
				loc: "56.2635,10.3041",
				postal: "8541"
			};
			cannotRetrieveLocation = true;
		})
		.then((json) => {
			const temp = { ...json.loc.split(",") };
			const latLng = {
				lat: parseFloat(temp[0]),
				lng: parseFloat(temp[1])
			};
			cb(latLng);
		});
}

