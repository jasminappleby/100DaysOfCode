const defaultSettings = {
	grid: {
		width: window.innerWidth,
		height: window.innerHeight,
		density: window.innerWidth / 20,
		seed: Math.random(),
		xScale: 1000,
		yScale: 1000,
		start: {
			x: 0,
			y: 0
		}
	},
	illustration: {
		cells: null,
		x: 0,
		y: 0,
		width: window.innerWidth,
		height: window.innerHeight,
		selector: "body",
		theme: {
			color: null,
			deviation: 360,
			offset: 180,
			saturation: 60,
			lightness: 70
		}
	},
	dot: {
		x: 0,
		y: 0,
		r: 0,
		fill: {
			color: "black"
		},
		scale: 0
	}
};