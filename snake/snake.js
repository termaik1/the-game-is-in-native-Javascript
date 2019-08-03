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

{
  //------------------------------------------------
}
snake[0] = {
  x: 9 * box,
  y: 7 * box
};

let food = {
  x: Math.floor(Math.random() * 17) * box,
  y: Math.floor(Math.random() * 15) * box
};

{
  //-------------------------------------------------
}

let gameSnake = () => {
  content.drawImage(field, 0, 0);

  content.drawImage(hamburger, food.x, food.y);

  for (let i = 0; i < snake.length; i++) {
    content.drawImage(snakeImg, snake[i].x, snake[i].y);
  }
  console.log(food.x);
  console.log(food.y);
};

let game = setInterval(gameSnake, 100);
