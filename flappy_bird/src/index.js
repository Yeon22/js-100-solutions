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
    score: 0,
};

const playGame = () => {
    let move = false;

    if (keys.ArrowLeft && player.x > 0) {
        player.x -= player.speed;
        move = true;
    }
    if (keys.ArrowRight && player.x < gameArea.offsetWidth - bird.offsetWidth) {
        player.x += player.speed;
        move = true;
    }
    if ((keys.ArrowUp || keys.Space) && player.y > 0) {
        player.y -= player.speed * 5;
        move = true;
    }
    if (keys.ArrowDown && player.y < gameArea.offsetHeight - bird.offsetHeight) {
        player.y += player.speed;
        move = true;
    }

    if (move) {
        wing.pose = wing.pose === 15 ? 25 : 15;
        wing.style.top = wing.pose + "px";
    }

    player.y += player.speed * 2;

    bird.style.left = player.x + "px";
    bird.style.top = player.y + "px";

    window.requestAnimationFrame(playGame);

    player.score++;
    score.innerText = "SCORE : " + player.score;

    return;
};

const start = () => {
    gameMessage.classList.add("hide");
    startBtn.classList.add("hide");
    
    bird.setAttribute("class", "bird");
    wing.setAttribute("class", "wing");
    bird.appendChild(wing);
    gameArea.appendChild(bird);

    wing.pose = 15;
    wing.style.top = wing.pose + "px";

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
