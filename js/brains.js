class InteractionObjects {
    constructor(x,y) {
      this.x = x;
      this.y = y; 
                 
    }
};

class Brains extends InteractionObjects {
    constructor(x,y,size){
        super(x,y,size)
        this.x = Math.floor(Math.random()* canvas.width); // ver medida del cerebro, puede que haga falta añadir this.width;
        this.y = 0;
        this.size = 100;
    }
    updateScore(){
        this.game.score += 10
    }

    draw() {
        const img = new Image();
        img.src = "./images/brain.png";
        this.ctx.drawImage(img,this.x, this.y, this.size, this.size);
      }

    
};
    



// generateBrains(){  
//   generatedBrain.forEach(item => {
//     //ctx.drawImage(item.brainImg, item.x, item.y, 100, 100);
//      this.drawBrains();
//    });
// }




