
class player {
  constructor(gameW, gameH) {
    this.gameH = gameH;

    this.width = 50;
    this.heigth = 50;

    this.maxUpV = 5;
    this.currV = 0;
    this.gravConst = 50;

    this.position = {
      x: 50,
      y: 150
    };
  }

  jumpUp() {
    this.currV = -this.maxUpV;
  }

  fall() {
    if (this.position.y < 150) {
      this.currV = this.maxUpV;
      return true;
    }
    return false;
  }

  draw(ctx) {
    ctx.fillStyle = "#F00";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.heigth);
  }

  update(deltaTime) {
    if (!deltaTime) {
      return;
    }

    this.position.y += this.currV;

    if (this.position.y + this.heigth > 200) {
      this.position.y = 150;
    }
  }
}

class input {
  constructor(Player) {
    this.falling = false;

    document.addEventListener("keydown", event => {
      if (event.keyCode === 38) {
        if (!this.falling) {
          Player.jumpUp();
        }
      }
    });

    document.addEventListener("keyup", event => {
      if (event.keyCode === 38) {
        this.falling = true;
        this.falling = Player.fall();
      }
    });
  }
}



const GAME_WIDTH = 800;
const GAME_HEIGHT = 300;

var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");

var Player = new player(GAME_WIDTH, GAME_HEIGHT);

ctx.clearRect(0, 0, 800, 300);

ctx.fillRect(0, 200, 800, 200);
ctx.fillRect(400, 100, 50, 1);

Player.draw(ctx);

new input(Player);

var lastTime = 0;

function gameLoop(timeStamp) {
  var deltaTime = timeStamp - lastTime;

  lastTime = timeStamp;

  ctx.clearRect(0, 0, 800, 200);

  Player.update(deltaTime);
  Player.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();