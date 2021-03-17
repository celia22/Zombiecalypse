class Player {
  constructor(x, y, direction, ctx, size) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.ctx = ctx;
    this.size = size;

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
    if (this.y === 540) {
      this.y -= 200;
    }
  }


  fall() {
    if (this.y === 340) {
      this.y += 200;
    }

  }

  isDirectionRight() {
    return this.direction = "right";
  }


  isDirectionLeft() {
    return this.direction = "left";
  }

  isDirectionUp() {
    return this.direction = "up";
  }


  draw() {
    let img = new Image();
    img.src = "./images/zombies/Attack (2).png";

    let imgRight = new Image();
    imgRight.src = "./images/zombies/Attack (2).png";

    let imgLeft = new Image();
    imgLeft.src = "./images/zombies/Walk (1)Left.png";

    let imgUp = new Image();
    imgUp.src = "./images/zombies/Walk (10).png";

    if (this.direction === "right") {
      img = imgRight;
    } else if (this.direction === "left") {
      img = imgLeft;
    } else if (this.direction === "up") {
      img = imgUp;
    };

    this.ctx.drawImage(img, this.x, this.y, this.size, this.size);

  }

};



