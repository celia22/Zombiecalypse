let generatedBrain = [];
let generatedEnemies = [];
let generatedEnemiesRight = [];
let enemiesInterval;
let enemiesRightInterval;
let brainsInterval;


class Game {
  constructor(player, ctx) {
    this.player = player;
    this.ctx = ctx;
    this.score = 0;
    this.endGame = false;
    // this.gameOver = gameOver;
    this.level = 1;
    this.youAreDead = new Audio("Images/Sounds/gameover.mp3")
    this.delicious = new Audio("Images/Sounds/delicious.mp3")
  }

  setControlsToKeys() {
    document.addEventListener('keydown', event => {
      switch (event.code) {
        case "ArrowLeft":
          this.player.moveLeft();
          break;
        case "ArrowRight":
          this.player.moveRight();
          break;
        case "ArrowUp":
          this.player.moveUp();
          break;

      }
    });

    document.addEventListener('keyup', event => {
      switch (event.code) {
        case "ArrowUp":
          this.player.fall();
          break;

      }
    });

  }

  // BRAINS 

  generateBrains() {
    let tempBrains = new Brains(this.x, 0, this.size, this.ctx, true)
    generatedBrain.push(tempBrains);
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
      if (this.player.x < (item.x + item.size / 2) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size / 2) &&
        (this.player.y + this.player.size / 2) > item.y && item.status === true) {
        item.status = false;
        this.score++
        this.delicious.play();
      }
    });
  }


  moveBrains() {
    generatedBrain.forEach(item => {
      item.y += 7;
    });
  }

  deleteBrains() {
    generatedBrain.forEach((item, index) => {
      if (item.y > canvas.height) {
        generatedBrain.splice(item, index);
      }
    });
  }

  // ENEMIES 

  generateEnemies() {
    let tempEnemie = new Enemies(this.x, 0, this.size, ctx, true)
    generatedEnemies.push(tempEnemie);

  }

  generateEnemiesRight() {
    let tempEnemieRight = new EnemiesRight(this.x, 0, this.size, ctx, true)
    generatedEnemiesRight.push(tempEnemieRight);
  }

  printEnemies() {
    generatedEnemies.forEach(item => {
      if (item.status === true) {
        item.draw();
      }
    });
  }

  printEnemiesRight() {
    generatedEnemiesRight.forEach(item => {
      if (item.status === true) {
        item.draw();
      }
    });
  }

  moveEnemies() {
    generatedEnemies.forEach(item => {
      if (this.score >= 0 && this.score <= 3) {
        console.log(this.score)
        item.x -= 10;
      } else if (this.score <= 4) {
        console.log(this.score)
        item.x -= 13;
      } else if (this.score <= 7) {
        item.x -= 16;
      } else if (this.score <= 10) {
        item.x -= 19;
      } else {
        item.x -= 25;
      }

    });
  }

  moveEnemiesRight() {
    generatedEnemiesRight.forEach(item => {
      if (this.score >= 0 && this.score <= 3) {
        item.x += 10;
      } else if (this.score <= 4) {
        item.x += 13;
      } else if (this.score <= 7) {
        item.x += 16;
      } else if (this.score <= 10) {
        item.x += 19;
      } else {
        item.x += 25;
      }

    });
  }


  enemiesCollision() {
    generatedEnemies.forEach(item => {
      if (this.player.x < (item.x + item.size / 2) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size / 2) &&
        (this.player.y + this.player.size / 2) > item.y &&
        item.status === true) {
        item.status = false;
        this.endGame = true;
        this.youAreDead.play();
        console.log("entro en collision", "player", this.player.x, "car", item.x, "itemsize", item.size)
      }
    });
  }

  enemiesCollisionRight() {
    generatedEnemiesRight.forEach(item => {
      if (this.player.x < (item.x + item.size / 2) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size / 2) &&
        (this.player.y + this.player.size / 2) > item.y &&
        item.status === true) {
        item.status = false;
        this.endGame = true;
        this.youAreDead.play();
        console.log("entro en collisionR", "player", this.player.x, "car", item.x, "itemsize", item.size)
      }
    });
  }

  deleteEnemies() {
    generatedEnemies.forEach((item, index) => {
      if (item.y > canvas.height) {
        generatedEnemies.splice(item, index);
      }
    });
  }

  // GAME //

  drawScore() {
    document.getElementById("score").innerHTML = `Score: ${this.score}`
  }

  updateLevel() {
    if (this.score >= 0 && this.score <= 3) {
      this.level = 1;
    } else if (this.score <= 4) {
      this.level = 2;
    } else if (this.score <= 7) {
      this.level = 3;
    } else if (this.score <= 10) {
      this.level = 4;
    } else {
      this.level = 5 + "Fast Zombiee!"
    }
  }

  drawLevel() {
    document.getElementById("level").innerHTML = `Level: ${this.level}`
  }

  cleanCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    this.printEnemiesRight();
    this.moveEnemiesRight();
    this.enemiesCollisionRight();
    this.drawScore();
    this.updateLevel();
    this.drawLevel();
    this.deleteBrains();
    this.deleteEnemies();
    if (this.endGame === false) {
      window.requestAnimationFrame(this.update.bind(this));
    }
    if (this.endGame === true) {
      window.setTimeout(gameOver, 1500);
      console.log(this.endGame)
      this.reset();
    }
  }

  init() {
    this.setControlsToKeys();
    enemiesInterval = setInterval(this.generateEnemies, 8000)
    enemiesRightInterval = setInterval(this.generateEnemiesRight, 6000)
    brainsInterval = setInterval(this.generateBrains, 3000)
    window.requestAnimationFrame(this.update.bind(this));
  }

  reset() {
    console.log("entro en reset")
    clearInterval(enemiesInterval);
    clearInterval(enemiesRightInterval);
    clearInterval(brainsInterval);
    this.player = this.player;
    this.score = 0;
    this.level = 0;
    this.endGame = false;
    generatedBrain = [];
    generatedEnemies = [];
    generatedEnemiesRight = [];
    console.log("score", this.score)
  }

};

