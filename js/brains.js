class InteractionObjects {
    constructor(x,y) {
      this.x = x;
      this.y = y; 
      
                 
    }

};

class Brains extends InteractionObjects {
    constructor(x,y,size){
        super(x,y,size)
        this.x = 160;
        this.y = 200;
    }
    updateScore(){
        this.game.score += 10
    }
};
    



 



