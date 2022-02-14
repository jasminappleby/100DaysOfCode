const canvas = document.getElementById("id");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false,
    gameSpeed = 2,
    angle = 0,
    hue = 0,
    frame = 0,
    score = 0;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bird.update();
    bird.draw();
    ctx.fillStyle = "red";
    ctx.font = "90px Georgia";
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    handlePar();
    handlePip();
    collide();
    if (collide()) return;
    requestAnimationFrame(animate);
    angle += 0.2;
    hue++;
    frame++;
}

    animate();