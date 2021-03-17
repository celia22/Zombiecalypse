class InteractionObjects {
  constructor(x, y) {
    this.x = x;
    this.y = y;

  }
};

class Brains extends InteractionObjects {
  constructor(x, y, size, ctx, status) {
    super(x, y, size, ctx)
    this.size = 100;
    this.x = this.size + Math.floor(Math.random() * (canvas.width - this.size));
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
    this.size = 100;
    this.x = 60;
    this.y = 560//this.size + Math.floor(Math.random() * (canvas.width - this.size));;
    this.ctx = canvas.getContext("2d");
    this.status = status;
  }


  draw() {
    const imgBrain = new Image();
    imgBrain.src = "./images/badbunny.png";
    this.ctx.drawImage(imgBrain, this.x, this.y, this.size, this.size);

  }

};



