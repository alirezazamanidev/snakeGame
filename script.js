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

let foodX;
let foody;
let score=0;
let dx=10;
let dy=0;



Play();
createfood();
function Play(){
    setTimeout(()=>{
        clearCanvas()
        drawFood()
        advanceSnake()
        drawSnake();
        
        Play();
    },100)

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

        createFood();
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
            createfood();
        }
    })

}
function drawFood() {
    ctx.fillStyle = "red";
    ctx.strokeStyl = "darkred";

    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);


}