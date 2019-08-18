const canvase = document.getElementById("snake");
const content = canvase.getContext("2d");

const field = new Image();
field.src = "./images/field547-484.jpg";

const hamburger = new Image();
hamburger.src = "./images/hamburger32.png";

const snakeImg = new Image();
snakeImg.src = "./images/snake32-32.png";

{
  //---------------------------------------------
}

let box = 32;

let score = 0;

let snake = [];
let key;

document.addEventListener("keydown", direction);
{
  //------------------------------------------------
}
snake[0] = {
  x: 8 * box,
  y: 7 * box
};

let food = {
  x: Math.floor(Math.random() * 17) * box,
  y: Math.floor(Math.random() * 15) * box
};

{
  //-------------------------------------------------
}

function direction(event) {
  let keyCode = event.keyCode;
  if ((keyCode == 37 || keyCode == 65) && key != "right") {
    key = "left";
  } else if ((keyCode == 38 || keyCode == 87) && key != "down") {
    key = "up";
  } else if ((keyCode == 39 || keyCode == 68) && key != "left") {
    key = "right";
  } else if ((keyCode == 40 || keyCode == 83) && key != "up") {
    key = "down";
  }
}

let scopeMap = (...props) => {

  let snakes;
  let coordX = new Map([[snakes, props[0]]]);
  let coordY = new Map([[snakes, props[1]]]);
  let snakeX = coordX.get(snakes);
  let snakeY = coordY.get(snakes);
  if (snakeX < 0 || snakeX > box * 16 || snakeY < 0 || snakeY > box * 14) {
    clearInterval(game);
    alert("Snake crashed against the wall. The game score = " + score);
  }
};

let snakeAte = (head, snake) =>{
  let {x , y} = head;
  for (let i = 0; i < snake.length; i++) {
    if (x == snake[i].x && y == snake[i].y) {
      clearInterval(game);
      alert("The snake ate itself. The game score = " + score);
    }
  }
}

let gameSnake = () => {
  content.drawImage(field, 0, 0);
  content.drawImage(hamburger, food.x, food.y);

  for (let i = 0; i < snake.length; i++) {
    content.drawImage(snakeImg, snake[i].x, snake[i].y);
  }
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * 17) * box,
      y: Math.floor(Math.random() * 15) * box
    };
  } else {
    snake.pop();
  }
  scopeMap(snakeX, snakeY);
  if (key == "left") {
    snakeX -= box;
  }
  if (key == "right") {
    snakeX += box;
  }
  if (key == "up") {
    snakeY -= box;
  }
  if (key == "down") {
    snakeY += box;
  }
  let head = {
    x: snakeX,
    y: snakeY
  };
  snakeAte(head, snake);
  snake.unshift(head);
};

let game = setInterval(gameSnake, 100);
