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

function jump() {
    if (character.classList != "animate") {
      character.classList.add("animate");
    }
    setTimeout(() => {
      character.classList.remove("animate");
    }, 500);
}

const checkDead = setInterval(() => {
    const charTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );

    const blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
  
    if (blockLeft < 20 && blockLeft > 0 && charTop >= 130) {
      block.style.animation = "none";
      block.style.display = "none";
      message.style.opacity = "1";
      alert(
        "You lost! Refresh the page to restart the game"
      );
    }
  }, 10);