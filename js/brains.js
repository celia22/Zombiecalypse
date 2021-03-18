class InteractionObjects {
  constructor(x, y) {
    this.x = x;
    this.y = y;

  }
};

class Brains extends InteractionObjects {
  constructor(x, y, size, ctx, status) {
    super(x, y, size, ctx)
    this.size = canvas.height / 7;
    this.x = this.size + Math.floor(Math.random() * (canvas.width - 2 * this.size)); // sigue saliendo del canvas
    this.y = 0;
    this.ctx = canvas.getContext("2d");
    this.status = status;
  }


  draw() {
    const imgBrain = new Image();
    imgBrain.src = "./images/brain.png";
    this.ctx.drawImage(imgBrain, this.x, this.y, this.size, this.size);
  }

};





class Enemies extends InteractionObjects {
  constructor(x, y, size, ctx, status) {
    super(x, y, size, ctx)
    this.size = 250;
    this.x = 1400;
    this.y = 540;
    this.ctx = canvas.getContext("2d");
    this.status = status;
  }


  draw() {
    const imgBrain = new Image();
    imgBrain.src = "./images/enemies/monster-truck.png";
    this.ctx.drawImage(imgBrain, this.x, this.y, this.size, this.size);

  }

};

