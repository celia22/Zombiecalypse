class InteractionObjects {
    constructor(x,y) {
      this.x = x;
      this.y = y; 
      
                 
    }

    // generateObjects(){
    //     let generatedBrain = []
    //     for (let i = 0; i < 30; i++){
    //       generatedBrain.push(this.brains);
    //     }
    //     console.log(generatedBrain)
        
    // }

};

class Brains extends InteractionObjects {
    constructor(x,y,size){
        super(x,y,size)
        this.x = Math.floor(Math.random()* canvas.width); // ver medida del cerebro, puede que haga falta añadir this.width;
        this.y = 0;
    }
    updateScore(){
        this.game.score += 10
    }

    
};
    



 



