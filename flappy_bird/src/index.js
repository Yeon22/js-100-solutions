const score = document.querySelector(".score");
const startBtn = document.querySelector(".startBtn");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");

let keys = {};
let player = {
    x: 0,
    y: 0,
    speed: 2,
    score: 0,
    inplay: true,
};
let pipe = {
    startPos: 0,
    spaceBetweenRow: 0,
    spaceBetweenCol: 0,
    pipeCount: 0,
};

const playGmaeOver = (bird) => {
    player.inplay = false;

    gameMessage.classList.remove("hide");
    gameMessage.innerHTML = `GAME OVER<br/>당신의 점수는 ${player.score + 1}점 입니다.<br/>다시 시작하려면 여기를 누르세요!`;

    bird.setAttribute("style", "transform: rotate(180deg)");
};

const makePipe = (pipePos) => {
    let totalHeight = gameArea.offsetHeight;
    let totalWidth = gameArea.offsetWidth;

    let pipeUp = document.createElement("div");
    pipeUp.classList.add("pipe");
    pipeUp.height = Math.floor(Math.random() * 350);
    pipeUp.style.height = pipeUp.height + "px";
    pipeUp.style.left = totalWidth + pipePos + "px";
    pipeUp.x = totalWidth + pipePos;
    pipeUp.style.top = "0px";
    pipeUp.style.backgroundColor = "red";
    gameArea.appendChild(pipeUp);

    pipe.spaceBetweenCol = Math.floor(Math.random() * 250) + 150;

    let pipeDown = document.createElement("div");
    pipeDown.classList.add("pipe");
    pipeDown.style.height = totalHeight - pipeUp.height - pipe.spaceBetweenCol + "px";
    pipeDown.style.left = totalWidth + pipePos + "px";
    pipeDown.x = totalWidth + pipePos;
    pipeDown.style.bottom = "0px";
    pipeDown.style.backgroundColor = "black";
    gameArea.appendChild(pipeDown);
};

const isCollide = (pipe, bird) => {
    let pipeRect = pipe.getBoundingClientRect();
    let birdRect = bird.getBoundingClientRect();
    return (
        pipeRect.bottom > birdRect.top &&
        pipeRect.top < birdRect.bottom &&
        pipeRect.left < birdRect.right &&
        pipeRect.right > birdRect.left
    );
}

const movePipes = (bird) => {
    let pipes = document.querySelectorAll(".pipe");
    let counter = 0;
    pipes.forEach((item) => {
        item.x -= player.speed;
        item.style.left = item.x + "px";
        if (item.x < 0) {
            item.parentElement.removeChild(item);
            counter++;
        }

        if (isCollide(item, bird)) {
            playGmaeOver(bird);
        }
    });

    for (let i = 0; i < counter / 2; i++) {
        makePipe(0)
    }
};

const playGame = () => {
    if (player.inplay) {
        let move = false;
        let bird = document.querySelector(".bird");
        let wing = document.querySelector(".wing");

        movePipes(bird);

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

        if (player.y > gameArea.offsetHeight) {
            playGmaeOver(bird);
        }

        player.y += player.speed * 2;

        bird.style.left = player.x + "px";
        bird.style.top = player.y + "px";

        window.requestAnimationFrame(playGame);

        player.score++;
        score.innerText = "SCORE : " + player.score;
    }
    
    return;
};

const start = () => {
    player.inplay = true;
    player.score = 0;
    gameArea.innerHTML = "";

    gameMessage.classList.add("hide");
    startBtn.classList.add("hide");

    let bird = document.createElement("div");
    let wing = document.createElement("div");
    bird.setAttribute("class", "bird");
    wing.setAttribute("class", "wing");
    bird.appendChild(wing);
    gameArea.appendChild(bird);

    wing.pose = 15;
    wing.style.top = wing.pose + "px";

    player.x = bird.offsetLeft;
    player.y = bird.offsetTop;

    pipe.startPos = 0;
    pipe.spaceBetweenRow = 400;
    pipe.pipeCount = Math.floor(gameArea.offsetWidth / pipe.spaceBetweenRow);
    for (let i = 0; i < pipe.pipeCount; i++) {
        makePipe(pipe.startPos * pipe.spaceBetweenRow);
        pipe.startPos++;
    }

    window.requestAnimationFrame(playGame);
};
startBtn.addEventListener("click", start);
gameMessage.addEventListener("click", start);

const pressOn = (e) => {
    keys[e.code] = true;
};
document.addEventListener("keydown", pressOn);

const pressOff = (e) => {
    keys[e.code] = false;
};
document.addEventListener("keyup", pressOff);
