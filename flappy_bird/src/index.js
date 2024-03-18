const score = document.querySelector(".score");
const startBtn = document.querySelector(".startBtn");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");

let keys = {};
let bird = document.createElement("div");
let wing = document.createElement("div");
let player = {
    x: 0,
    y: 0,
    speed: 2,
};

const playGame = () => {
    if (keys.ArrowLeft) {
        player.x -= player.speed;
    }
    if (keys.ArrowRight) {
        player.x += player.speed;
    }
    if (keys.ArrowUp) {
        player.y -= player.speed;
    }
    if (keys.ArrowDown) {
        player.y += player.speed;
    }

    bird.style.left = player.x + "px";
    bird.style.top = player.y + "px";

    window.requestAnimationFrame(playGame);

    return;
};

const start = () => {
    gameMessage.classList.add("hide");
    startBtn.classList.add("hide");

    bird.setAttribute("class", "bird");
    wing.setAttribute("class", "wing");
    bird.appendChild(wing);
    gameArea.appendChild(bird);

    player.x = bird.offsetLeft;
    player.y = bird.offsetTop;

    window.requestAnimationFrame(playGame);
};
startBtn.addEventListener("click", start);
gameMessage.addEventListener("click", start);

const pressOn = (e) => {
    keys[e.code] = true;
    console.log(keys);
};
document.addEventListener("keydown", pressOn);

const pressOff = (e) => {
    keys[e.code] = false;
    console.log(keys);
};
document.addEventListener("keyup", pressOff);
