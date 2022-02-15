const character = document.getElementById("character");
const block = document.getElementById("block");
const score = document.getElementById("score");
const jumpBtn = document.getElementById("btn");
const message = document.getElementById("message");

const count = 0;

const body = document.body;

body.addEventListener("click", () => {
    jump();
});

jumpBtn.addEventListener("click", () => {
    jump();
});

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      jump();
    }
})

function jump() {
    if (character.classList != "animate") {
      character.classList.add("animate");
  
      count++;
      score.innerText = "Score : " + count;
    }
    setTimeout(() => {
      character.classList.remove("animate");
    }, 500);
}

