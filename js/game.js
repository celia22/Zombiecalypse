let generatedBrain = [];
let generatedEnemies = [];
let generatedEnemiesRight = [];


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
          //this.player.isInGround();
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
      item.x -= 10;
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
        this.gameOver()
      }
    });
  }

  deleteEnemies() {
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
    window.requestAnimationFrame(this.update.bind(this));

  }


  init() {
    this.setControlsToKeys();
    setInterval(this.generateEnemies, 10000)
    setInterval(this.generateBrains, 3000)
    window.requestAnimationFrame(this.update.bind(this));
  }


};



// let generatedBrain = [];
// let generatedEnemies = [];
// let generatedEnemiesRight = [];


// class Game {
//   constructor(player, ctx) {
//     this.player = player;
//     this.ctx = ctx;
//     this.score = 0;

//   }

//   setControlsToKeys() {
//     document.addEventListener('keydown', event => {
//       switch (event.code) {
//         case "ArrowLeft":
//           this.player.moveLeft();
//           break;
//         case "ArrowRight":
//           this.player.moveRight();
//           break;
//         case "ArrowUp":
//           this.player.moveUp();
//           break;

//       }
//     });

//     document.addEventListener('keyup', event => {
//       switch (event.code) {
//         case "ArrowUp":
//           this.player.fall();
//           //this.player.isInGround();
//           break;

//       }
//     });

//   }

//   // BRAINS 

//   generateBrains() {
//     let temp = new Brains(this.x, 0, this.size, this.ctx, true)
//     generatedBrain.push(temp);
//   }


//   printBrains() {
//     generatedBrain.forEach(item => {
//       if (item.status === true) {
//         item.draw();
//       }
//     });
//   }

//   brainCollision() {
//     generatedBrain.forEach(item => {
//       if (this.player.x < (item.x + item.size) &&
//         (this.player.x + this.player.size / 2) > item.x &&
//         this.player.y < (item.y + item.size) &&
//         (this.player.y + this.player.size) > item.y && item.status === true) {
//         item.status = false;
//         this.score++
//       }
//     });
//   }


//   moveBrains() {
//     generatedBrain.forEach(item => {
//       item.y += 7;
//     });
//   }

//   deleteBrains() {
//     generatedBrain.forEach((item, index) => {
//       if (item.y > canvas.height) {
//         generatedBrain.splice(item, index);
//       }
//     });
//   }

//   // ENEMIES 

//   generateEnemies() {
//     let temp = new Enemies(this.x, 0, this.size, ctx, true)
//     generatedEnemies.push(temp);

//   }

//   generateEnemiesRight() {
//     let tempRight = new EnemiesRight(this.x, 0, this.size, ctx, true)
//     generatedEnemiesRight.push(tempRight);
//   }

//   printEnemies() {
//     generatedEnemies.forEach(item => {
//       if (item.status === true) {
//         item.draw();
//       }
//     });
//   }

//   printEnemiesRight() {
//     generatedEnemiesRight.forEach(item => {
//       if (item.status === true) {
//         item.draw();
//       }
//     });
//   }

//   moveEnemies() {
//     generatedEnemies.forEach(item => {
//       item.x -= 10;
//     });
//   }

//   moveEnemiesRight() {
//     generatedEnemiesRight.forEach(item => {
//       item.x += 10;
//     });
//   }


//   enemiesCollision() {
//     generatedEnemies.forEach(item => {
//       if (this.player.x < (item.x + item.size + 10) &&
//         (this.player.x + this.player.size / 2) > item.x &&
//         this.player.y < (item.y + item.size) &&
//         (this.player.y + this.player.size) > item.y &&
//         item.status === true) {
//         item.status = false;
//         this.gameOver()
//       }
//     });
//   }

//   deleteEnemies() {
//     generatedEnemies.forEach((item, index) => {
//       if (item.y > canvas.height) {
//         generatedEnemies.splice(item, index);
//       }
//     });
//     // console.log("brains", generatedEnemies)
//   }

//   // GAME //

//   drawScore() {
//     document.getElementById("score").innerHTML = "Score: " + this.score;
//   }

//   cleanCanvas() {
//     ctx.clearRect(0, 0, 1450, 750);
//   }

//   gameOver() {
//     document.getElementById("game-over").style.display = "block";
//     document.getElementById("canvas").style.display = "none";
//     document.getElementById("score").style.display = "none";
//   }

//   update() {
//     this.cleanCanvas();
//     this.player.draw();
//     this.printBrains();
//     this.moveBrains();
//     this.brainCollision();
//     this.printEnemies();
//     this.moveEnemies();
//     this.enemiesCollision();
//     this.printEnemiesRight();
//     this.moveEnemiesRight();
//     this.drawScore();
//     this.deleteBrains();
//     this.deleteEnemies();
//     window.requestAnimationFrame(this.update.bind(this));

//   }


//   init() {
//     this.setControlsToKeys();
//     setInterval(this.generateEnemies, 10000)
//     setInterval(this.generateEnemiesRight, 10000)
//     setInterval(this.generateBrains, 3000)
//     window.requestAnimationFrame(this.update.bind(this));
//   }


// };



