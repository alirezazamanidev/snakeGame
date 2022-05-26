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
function clearCanvas() {
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black'

    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height)
}
clearCanvas();

function drawSnake() { return snake.forEach(drawSnakePart) }
drawSnake();
function drawSnakePart(snakePart) {
    ctx.fillStyle = 'lightgreen';
    ctx.strokeStyle = 'black'
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
