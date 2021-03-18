class Player {
  constructor(x, y, direction, ctx, size) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.ctx = ctx;
    this.size = 150;
    this.selectedImg;
  }

  moveLeft() {
    if (this.x > 20) {
      this.x -= 100;
    }

  }
  moveRight() {
    if (this.x < 1250) {
      this.x += 100;
    }

  }

  moveUp() {
    if (this.y === 600) {
      this.y -= 400;
    }
  }


  fall() {
    if (this.y === 200) {
      this.y += 400;
    }

  }


  // jumping() {
  //   if (this.moveUp === true) {
  //     setInterval(fall, 1000)
  //   }
  // }


  isDirectionRight() {
    return this.direction = "right";
  }


  isDirectionLeft() {
    return this.direction = "left";
  }

  isDirectionUp() {
    return this.direction = "up";
  }

  isInGround() {
    return this.direction = "ground";
  }

  draw() {
    let img = new Image();
    img.src = "./images/zombies/Attack (2).png";

    let imgRight = new Image();
    imgRight.src = "./images/zombies/Attack (2).png";

    let imgLeft = new Image();
    imgLeft.src = "./images/zombies/Walk (1)Left.png";

    let imgUpRigth = new Image();
    imgUpRigth.src = "./images/zombies/Jump.png";

    let imgUpLeft = new Image();
    imgUpLeft.src = "./images/zombies/left-jump.png";


    if (this.direction === "right") {
      img = imgRight;
      this.selectedImg = this.imgRight;
    } else if (this.direction === "left") {
      img = imgLeft;
    } else if (this.direction === "left" && this.player.isDirectionUp()) {
      img = imgUpLeft;
      this.size = 175;
    } else if (this.direction === "up") {
      img = imgUpRigth;
      this.size = 175;
    } else if (this.direction === "ground") {
      img = imgRight;
      this.size = 150;
    }

    this.ctx.drawImage(img, this.x, this.y, this.size, this.size);

  }

};



