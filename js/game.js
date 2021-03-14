class Game {
  constructor(player1, cb){
    //this.zombieGirl = this.zombieGirl
  }

  movePlayer (){
    document.addEventListener('keydown', event => {
        switch (event.code) {   
          case "ArrowLeft":     
            this.zombieGirl.moveLeft();
            console.log('left');
            break;
          case "ArrowRight":
            this.zombieGirl.moveRight();
            console.log('right');
            break;
          case "ArrowUp":
            this.zombieGirl.moveUp();
            console.log("up");
            break;

        }
        update();
      });

  }

}


function cleanCanvas (){
    ctx.clearRect(0,0,1300,700);
}


function update() {
    cleanCanvas();
    this.drawZombie();
    window.requestAnimationFrame(this.update.bind(this));
}
  
  update()






//   class Game {
//     constructor(options, callback) {
//       this.ctx = options.ctx;
//       this.snake = options.snake;
//       this.rows = options.rows;
//       this.columns = options.columns;
//       this.maxCells = options.maxCells;
//       this.food = undefined;
//       this.cb = callback;
//     }
  
//     _drawSnake() {
//       this.ctx.fillStyle = 'green';
//       this.snake.body.forEach((position) => {
//         this.ctx.fillRect(
//           position.column * this.maxCells,
//           position.row * this.maxCells,
//           8,
//           8
//         );
//       });
//     }
  
//     _drawFood() {
//       this.ctx.fillStyle = 'red';
//       this.ctx.fillRect(this.food.column * 10, this.food.row * 10, 8, 8);
//     }
  
//     _assignControlsToKeys() {
//       document.addEventListener('keydown', (event) => {
//         switch (event.code) {
//           case 'ArrowUp':
//             this.snake.goUp();
//             break;
//           case 'ArrowDown':
//             this.snake.goDown();
//             break;
//           case 'ArrowLeft':
//             this.snake.goLeft();
//             break;
//           case 'ArrowRight':
//             this.snake.goRight();
//             break;
//           default:
//             break;
//         }
//       });
//     }
  
//     _generateFood() {
//       this.food = {
//         row: Math.floor(Math.random() * this.rows),
//         column: Math.floor(Math.random() * this.columns),
//       };
//     }
  
//     _clean() {
//       this.ctx.clearRect(0, 0, 500, 500);
//     }
  
//     _update() {
//       this._clean();
//       this._drawSnake();
//       this._drawFood();
//       if (this.snake.collidesWith(this.food)) {
//         this._generateFood();
//         this.snake.grow();
//       }
//       if (this.snake.hasEatenItSelf()) {
//         console.log('me han matauuu!');
//         this.snake.stop();
//         this.cb();
//         return;
//       }
//       window.requestAnimationFrame(this._update.bind(this));
//     }
  
//     start() {
//       this._assignControlsToKeys();
//       this._generateFood();
//       this.snake.move();
//       window.requestAnimationFrame(this._update.bind(this));
//     }
//   }
  