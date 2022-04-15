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

class Illustration {
	svg;
	wrapper;
	elements;

	constructor(settings) {
		this.props = Object.assign(defaultSettings.illustration, settings);

		this.wrapper = document.querySelector(this.props.selector);
		this.setSVG();
		this.draw();
	}

	setSVG(selector) {
		this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		this.svg.setAttribute(
			"viewBox",
			`${this.props.x} ${this.props.y} ${this.props.width} ${this.props.height}`
		);

		this.wrapper.append(this.svg);
	}

	getSVG() {
		return this.svg;
	}

	draw() {
		this.elements = [];

		this.props.cells.forEach((cell) => {
			const color = this.props.theme.color
				? this.props.theme.color
				: `hsl(${
						cell.noise * this.props.theme.deviation + this.props.theme.offset
				  }, ${this.props.theme.saturation}%, ${this.props.theme.lightness}%)`;

			const element = new Square({
				x: cell.position.x,
				y: cell.position.y,
				width: cell.size.width,
				height: cell.size.height,
				fill: color
			});
			this.elements.push(element.getElement());
		});

		this.svg.append(...this.elements);
	}
}

class Square {
	element;

	constructor(settings) {
		this.props = Object.assign(defaultSettings.dot, settings);

		this.element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		this.setElement();
	}

	getElement() {
		return this.element;
	}

	setElement() {
		console.log(this.props);
		this.element.setAttribute("x", this.props.x);
		this.element.setAttribute("y", this.props.y);
		this.element.setAttribute("width", this.props.width);
		this.element.setAttribute("height", this.props.height);
		this.element.style.fill = this.props.fill;
	}
}

function clamp(num, min, max) {
	return Math.min(Math.max(num, min), max);
}

const grid = new Grid();
const illustration = new Illustration({
	cells: grid.getGrid()
});


