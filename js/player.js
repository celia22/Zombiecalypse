class Player {
  constructor(x, y, direction, ctx, size) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.ctx = ctx;
    this.size = 150;
    this.selectedImg = new Image();
    this.selectedImg.src = "images/zombies/Attack (2).png";

    this.imgRight = new Image();
    this.imgRight.src = "images/zombies/Attack (2).png";

    this.imgLeft = new Image();
    this.imgLeft.src = "images/zombies/Walk (1)Left.png";

    this.imgUpRigth = new Image();
    this.imgUpRigth.src = "images/zombies/Jump.png";

    this.imgUpLeft = new Image();
    this.imgUpLeft.src = "images/zombies/left-jump.png";
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
    if (this.y === 615) {
      this.y -= 235;
      this.direction = "up";
    }
  }

  fall() {
    if (this.y === 380) {
      this.y += 235;
      this.direction = "ground";
    }
  }

  draw() {

    if (this.direction === "right") {
      this.selectedImg = this.imgRight;
    } else if (this.direction === "left") {
      this.selectedImg = this.imgLeft;
    } else if (this.direction === "up") {
      if (this.selectedImg === this.imgLeft) {
        this.selectedImg = this.imgUpLeft;
        this.size = 175;
      }
      else if (this.selectedImg === this.imgRight) {
        this.selectedImg = this.imgUpRigth;
        this.size = 175;
      }
    } else if (this.direction === "ground") {
      this.selectedImg = this.imgRight;
      this.size = 150;
    }
    this.ctx.drawImage(this.selectedImg, this.x, this.y, this.size, this.size);

  }

};