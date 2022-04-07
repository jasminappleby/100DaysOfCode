const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

const TOTAL = 100
const petalArray = []

const petalImg = new Image()
petalImg.src = 'https://djjjk9bjm164h.cloudfront.net/petal.png'
petalImg.addEventListener('load', () => {
  for (let i = 0; i < TOTAL; i++) {
    petalArray.push(new Petal())
  }
  render()
})