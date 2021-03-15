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
    



 



// /*

// // GREEN HOLES
// var Stick = function(x, y) { 
//     this.x = x;
//     this.y = y;
// };

// Stick.prototype.draw = function() {
//     fill(16, 227, 37);
//     rectMode(CENTER);
//     ellipse(this.x, this.y, 80, 80);
// };

// var sticks = [];
// for (var i = 0; i < 40; i++) {  
//     sticks.push(new Stick(i * 120, random(30, 300)));
// }*/