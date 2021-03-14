class Player {
  constructor() {
    this.x = 250;
    this.y = 550; 
    // this.width = this.width;
    // this.height = this.height;
    this.points = 0;   
    const img = new Image();
    img.addEventListener('load', () => {
    this.img = img;
    this.draw();
    });
    img.src = "./images/zombies/Attack (2).png";
     
  }

  moveLeft() {
    this.x -= 40;
    this.img.src = "./images/zombies/Attack (2).png";
  }
  moveRight() {
    this.x += 40;
    this.img.src = "./images/zombies/Dead (1).png"; 
  }
  moveUp(){
    this.y -= 40;
    this.img.src = "./images/zombies/Walk (10).png"; 
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, 100, 100);
  }
}

const zombieGirl = new Player;







// class Snake {
//     constructor(maxRows, maxColumns) {
//       this.initialBody = [
//         { row: 1, column: 5 },
//         { row: 1, column: 4 },
//         { row: 1, column: 3 },
//         { row: 1, column: 2 },
//         { row: 1, column: 1 },
//       ];
//       this.direction = 'right';
//       this.intervalId = undefined;
//       this.maxRows = maxRows;
//       this.maxColumns = maxColumns;
//       this.body = [...this.initialBody];
//       this.previousTail = undefined;
//     }
  
//     _moveForward() {
//       let head = this.body[0];
  
//       switch (this.direction) {
//         case 'up':
//           this.body.unshift({
//             row: (head.row - 1 + this.maxRows) % this.maxRows,
//             column: head.column,
//           });
//           break;
//         case 'down':
//           this.body.unshift({
//             row: (head.row + 1) % this.maxRows,
//             column: head.column,
//           });
//           break;
//         case 'left':
//           this.body.unshift({
//             row: head.row,
//             column: (head.column - 1 + this.maxColumns) % this.maxColumns,
//           });
//           break;
//         case 'right':
//           this.body.unshift({
//             row: head.row,
//             column: (head.column + 1) % this.maxColumns,
//           });
//           break;
//       }
//       this.previousTail = this.body.pop();
//     }
  
//     goUp() {
//       if (this.direction === 'left' || this.direction === 'right') {
//         this.direction = 'up';
//       }
//     }
  
//     goDown() {
//       if (this.direction === 'left' || this.direction === 'right') {
//         this.direction = 'down';
//       }
//     }
  
//     goLeft() {
//       if (this.direction === 'down' || this.direction === 'up') {
//         this.direction = 'left';
//       }
//     }
  
//     goRight() {
//       if (this.direction === 'down' || this.direction === 'up') {
//         this.direction = 'right';
//       }
//     }
  
//     grow() {
//       // if (this.previousTail) {
//       this.body.push(this.previousTail);
//       // this.previousTail = undefined;
//       // }
//     }
  
//     collidesWith(food) {
//       return this.body[0].row === food.row && this.body[0].column === food.column;
//     }
  
//     hasEatenItSelf() {
//       // the only way to check if the head's position is inside of my body
//       return this.body.some((element, index, array) => {
//         return (
//           element.row === array[0].row &&
//           element.column === array[0].column &&
//           index != 0
//         );
//       });
//     }
  
//     move() {
//       this.intervalId = setInterval(this._moveForward.bind(this), 100);
//     }
  
//     stop() {
//       if (this.intervalId) {
//         clearInterval(this.intervalId);
//         this.intervalId = undefined;
//       }
//     }
//   }
  