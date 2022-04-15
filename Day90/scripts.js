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

class Grid {
	props;

	cellWidth = 0;
	cellHeight = 0;
	grid = [];

	constructor(settings) {
		this.props = Object.assign(defaultSettings.grid, settings);

		this.grid = [];
		this.cellWidth = Math.floor(this.props.width / this.props.density);
		this.cellHeight = Math.floor(this.props.height / this.props.density);

		this.setGrid();
	}

	setGrid() {
		const simplex = new SimplexNoise(this.props.seed);

		for (
			let y = this.props.start.y;
			y < this.props.height;
			y += this.cellHeight
		) {
			for (let x = this.props.start.x; x < this.props.width; x += this.cellWidth) {
				this.grid.push({
					position: {
						x: x,
						y: y
					},
					size: {
						width: this.cellWidth,
						height: this.cellHeight
					},
					noise: simplex.noise2D(x / this.props.xScale, y / this.props.yScale)
				});
			}
		}
	}

	getGrid() {
		return this.grid;
	}
}


