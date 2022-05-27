// select Element
const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext('2d');
// var
let snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 },

]
let changingDirection = false;
document.addEventListener("keydown",changeDirection);

let foodX;
let foody;
let score=0;
let dx=10;
let dy=0;



Play();
createfood();
function Play(){
    if(didGameEnd()) return;
    setTimeout(()=>{
        changingDirection = false;
        clearCanvas()
        drawFood()
        advanceSnake()
        drawSnake();
        
        Play();
    },100)

}
function didGameEnd(){
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) return true;
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > gameCanvas.width - 10;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > gameCanvas.height - 10;
    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}
function clearCanvas() {
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black'

    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height)
}

function drawSnake() { return snake.forEach(drawSnakePart) }
function drawSnakePart(snakePart) {
    ctx.fillStyle = 'lightgreen';
    ctx.strokeStyle = 'black'
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
function advanceSnake(){
    const head = { x: snake[0].x + dx, y: snake[0].y + dy }

    snake.unshift(head);
    if (head.x === foodX && head.y === foodY) {
        score += 10;

        document.getElementById('score').innerHTML = score;

        createfood();
    } else {
        snake.pop()
    }
}
function randomNumber(max, min) { return Math.round((Math.random() * (max - min) + min) / 10) * 10 }
function createfood() {
    foodX = randomNumber(0, gameCanvas.width - 10);
    foodY = randomNumber(0, gameCanvas.height - 10);
    snake.forEach(snakePart=>{
        if(snakePart.x===foodX && snakePart.y===foodY){
            createfood()
        }
    })

}
function drawFood() {
    ctx.fillStyle = "red";
    ctx.strokeStyl = "darkred";

    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);


}


function changeDirection(event){
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    if (changingDirection) return;
    changingDirection = true;
    let keyPressed=event.keyCode;
    if(keyPressed===LEFT_KEY&& dx!==10){
        dx=-10;
        dy=0;
    }   
    if (keyPressed === RIGHT_KEY && dx!=-10) {
        dx = 10;
        dy = 0
    }

    if (keyPressed === UP_KEY && dy!==10) {
        dx = 0;
        dy = -10;
    }

    if (keyPressed === DOWN_KEY&&dy!==-10) {
        dx = 0;
        dy = 10;
    }

}