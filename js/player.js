class Player {
  constructor(x, y, direction, ctx, size) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.ctx = ctx;
    this.size = 150;
    this.selectedImg = new Image();
    this.selectedImg.src = "./images/zombies/Attack (2).png";

    this.imgRight = new Image();
    this.imgRight.src = "./images/zombies/Attack (2).png";

    this.imgLeft = new Image();
    this.imgLeft.src = "./images/zombies/Walk (1)Left.png";

    this.imgUpRigth = new Image();
    this.imgUpRigth.src = "./images/zombies/Jump.png";

    this.imgUpLeft = new Image();
    this.imgUpLeft.src = "./images/zombies/left-jump.png";
  }

  moveLeft() {
    if (this.x > 20) {
      this.x -= 100;
      this.direction = "left";
    }
  }

  moveRight() {
    if (this.x < 1250) {
      this.x += 100;
      this.direction = "right";
    }
  }

  moveUp() {
    if (this.y === 600) {
      this.y -= 250;
      this.direction = "up";
    }
  }

  fall() {
    if (this.y === 350) {
      this.y += 250;
      this.direction = "ground";
    }
  }


  // jumping() {
  //   if (this.moveUp === true) {
  //     setInterval(fall, 1000)
  //   }
  // }


  draw() {

    if (this.direction === "right") {
      this.selectedImg = this.imgRight;
    } else if (this.direction === "left") {
      this.selectedImg = this.imgLeft;
    } else if (this.direction === "left" && this.moveUp) {
      console.log("entro en left")
      this.selectedImg = this.imgUpLeft;
      this.size = 175;
    } else if (this.direction === "up") {
      this.selectedImg = this.imgUpRigth;
      this.size = 175;
    } else if (this.direction === "ground") {
      this.selectedImg = this.imgRight;
      this.size = 150;
    }
    this.ctx.drawImage(this.selectedImg, this.x, this.y, this.size, this.size);
  }

};



// class Player {
//   constructor(x, y, direction, ctx, size) {
//     this.x = x;
//     this.y = y;
//     this.direction = direction;
//     this.ctx = ctx;
//     this.size = 150;
//     //this.selectedImg;
//   }

//   moveLeft() {
//     if (this.x > 20) {
//       this.x -= 100;
//     }

//   }
//   moveRight() {
//     if (this.x < 1250) {
//       this.x += 100;
//     }

//   }

//   moveUp() {
//     if (this.y === 600) {
//       this.y -= 250;
//     }
//   }


//   fall() {
//     if (this.y === 350) {
//       this.y += 250;
//     }

//   }


//   // jumping() {
//   //   if (this.moveUp === true) {
//   //     setInterval(fall, 1000)
//   //   }
//   // }


//   isDirectionRight() {
//     return this.direction = "right";
//   }


//   isDirectionLeft() {
//     return this.direction = "left";
//   }

//   isDirectionUp() {
//     return this.direction = "up";
//   }

//   isInGround() {
//     return this.direction = "ground";
//   }

//   draw() {
//     let img = new Image();
//     img.src = "./images/zombies/Attack (2).png";

//     let imgRight = new Image();
//     imgRight.src = "./images/zombies/Attack (2).png";

//     let imgLeft = new Image();
//     imgLeft.src = "./images/zombies/Walk (1)Left.png";

//     let imgUpRigth = new Image();
//     imgUpRigth.src = "./images/zombies/Jump.png";

//     let imgUpLeft = new Image();
//     imgUpLeft.src = "./images/zombies/left-jump.png";


//     if (this.direction === "right") {
//       img = imgRight;
//       this.selectedImg = this.imgRight;
//     } else if (this.direction === "left") {
//       img = imgLeft;
//     } else if (this.direction === "left" && this.player.isDirectionUp()) {
//       img = imgUpLeft;
//       this.size = 175;
//     } else if (this.direction === "up") {
//       img = imgUpRigth;
//       this.size = 175;
//     } else if (this.direction === "ground") {
//       img = imgRight;
//       this.size = 150;
//     }

//     this.ctx.drawImage(img, this.x, this.y, this.size, this.size);

//   }

// };
