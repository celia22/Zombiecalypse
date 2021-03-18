let generatedBrain = [];
let generatedEnemies = [];


class Game {
  constructor(player, ctx) {
    this.player = player;
    this.ctx = ctx;
    this.score = 0;
  }

  setControlsToKeys() {
    document.addEventListener('keydown', event => {
      switch (event.code) {
        case "ArrowLeft":
          this.player.moveLeft();
          this.player.isDirectionLeft();
          console.log(this.player.direction)
          //console.log('left');
          break;
        case "ArrowRight":
          this.player.moveRight();
          this.player.isDirectionRight();
          //console.log('right');
          break;
        case "ArrowUp":
          this.player.moveUp();
          this.player.isDirectionUp();
          //console.log("up");
          break;

      }
      //console.log("setokeys", this.setControlsToKeys)
    });

    document.addEventListener('keyup', event => {
      switch (event.code) {
        case "ArrowUp":
          this.player.fall();
          this.player.isInGround();
          break;

      }
    });

  }

  // BRAINS 

  generateBrains() {
    let temp = new Brains(this.x, 0, this.size, this.ctx, true)
    generatedBrain.push(temp);
  }


  printBrains() {
    generatedBrain.forEach(item => {
      if (item.status === true) {
        item.draw();
      }
    });
  }

  brainCollision() {
    generatedBrain.forEach(item => {
      if (this.player.x < (item.x + item.size) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size) &&
        (this.player.y + this.player.size) > item.y && item.status === true) {
        item.status = false;
        this.score++
      }
    });
    //console.log(this.score)
  }


  moveBrains() {
    generatedBrain.forEach(item => {
      item.y += 5;
    });
  }

  deleteBrains() {
    generatedBrain.forEach((item, index) => {
      if (item.y > canvas.height) {
        generatedBrain.splice(item, index);
      }
    });
    //console.log("brains", generatedBrain)
  }

  // ENEMIES 

  generateEnemies() {
    let temp = new Enemies(this.x, 0, this.size, ctx, true)
    generatedEnemies.push(temp);
  }


  printEnemies() {
    generatedEnemies.forEach(item => {
      if (item.status === true) {
        item.draw();
      }
    });
  }

  moveEnemies() {
    generatedEnemies.forEach(item => {
      item.x -= 8;
    });
  }


  enemiesCollision() {
    generatedEnemies.forEach(item => {
      if (this.player.x < (item.x + item.size + 10) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size) &&
        (this.player.y + this.player.size) > item.y &&
        item.status === true) {
        item.status = false;
        setInterval(this.gameOver, 1000)
      }
    });
    return true
  }

  deleteBrains() {
    generatedEnemies.forEach((item, index) => {
      if (item.y > canvas.height) {
        generatedEnemies.splice(item, index);
      }
    });
    // console.log("brains", generatedEnemies)
  }

  // GAME //

  drawScore() {
    document.getElementById("score").innerHTML = "Score: " + this.score;
  }

  cleanCanvas() {
    ctx.clearRect(0, 0, 1450, 750);
  }

  gameOver() {
    document.getElementById("game-over").style.display = "block";
    document.getElementById("canvas").style.display = "none";
    document.getElementById("score").style.display = "none";
  }

  update() {
    this.cleanCanvas();
    this.player.draw();
    this.printBrains();
    this.moveBrains();
    this.brainCollision();
    this.printEnemies();
    this.moveEnemies();
    this.enemiesCollision();
    this.drawScore();
    this.deleteBrains();
    window.requestAnimationFrame(this.update.bind(this));

  }


  init() {
    this.setControlsToKeys();
    console.log("setcontrolskeys was called")
    setInterval(this.generateBrains, 3000)
    setInterval(this.generateEnemies, 6000)
    window.requestAnimationFrame(this.update.bind(this));
  }


};

