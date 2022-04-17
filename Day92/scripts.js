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