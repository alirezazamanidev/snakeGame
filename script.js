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

Play();
createfood();
function Play(){
    setTimeout(()=>{
        clearCanvas()
        drawFood()
        // advanceSnake()
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
function randomNumber(max, min) { return Math.round((Math.random() * (max - min) + min) / 10) * 10 }
function createfood() {
    foodX = randomNumber(0, gameCanvas.width - 10);
    foodY = randomNumber(0, gameCanvas.height - 10);

}
function drawFood() {
    ctx.fillStyle = "red";
    ctx.strokeStyl = "darkred";

    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);


}