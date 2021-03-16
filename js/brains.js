class InteractionObjects {
  constructor(x, y) {
    this.x = x;
    this.y = y;

  }
};

class Brains extends InteractionObjects {
  constructor(x, y, size, ctx) {
    super(x, y, size, ctx)
    this.x = Math.floor(Math.random() * canvas.width); // ver medida del cerebro, puede que haga falta añadir this.width;
    this.y = 0;
    this.size = 100;
    this.ctx = canvas.getContext("2d");
  }
  updateScore() {
    this.game.score += 10
  }

  draw() {
    const imgBrain = new Image();
    imgBrain.src = "./images/brain.png";
    this.ctx.drawImage(imgBrain, this.x, this.y, this.size, this.size);
    console.log("drawbrains")
  }

};


class Enemies extends InteractionObjects {
  constructor(x, y, size, ctx) {
    super(x, y, size, ctx)
    this.x = Math.floor(Math.random() * canvas.width); // ver medida del cerebro, puede que haga falta añadir this.width;
    this.y = 0;
    this.size = 100;
    this.ctx = canvas.getContext("2d");
  }
  updateScore() {
    this.game.score += 10
  }

  draw() {
    const imgBrain = new Image();
    imgBrain.src = "./images/badbunny.png";
    this.ctx.drawImage(imgBrain, this.x, this.y, this.size, this.size);
    console.log("drawbrains")
  }

};


