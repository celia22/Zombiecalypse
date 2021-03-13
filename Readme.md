# Zombiecalypse 
There's been a zombie outbreak around the world, a few humans have survived, and you are not one of them.
The purpose of the game is to eat all the brains as possible before they reach the ground.
The game screen is an interface from which two kind of brains will fall.
The player is represented by a zombie sprite, that has to reach the "good" brains, and avoid the bad ones.
The movement is horizontal and vertical, but only forward to the right, so the keys to control it will be up and right. The player will be able to jump to catch/avoid objects.
The game ends if the zombie eats one of the "bad" brains, represented by reggaeton singers.


## MVP
### Technique
HTML5, Canvas, DOM.

### Game states
* __Start Screen__
  * Title
  * Play button
  * Introduction to the game and instructions.
  
* __Game Screen__
  * Canvas
* __Game Over Screen__
  * Play again button
  * Score ?
  
### Game
* Create Splash Screen
* Create interface
* Create player
* Move player
  * Press the right key to move the player horizontally, and top to move it vertically
* Create items that fall
* Check collision with both interactive objects
* Update Score
* Game Over screen



## BACK LOG

### Delivery Chart
* Shows:
  * Score
  
### Music
* Add sound when a brain is catched
* Add sound when the game over screen is loaded

### Levels 
* Speed of brains will increase ¿?

### Canvas frame
* Infinite background


## Data structure

__main.js__


````
buildDom(){
}

createSplashScreen(){
}

createGameScreen(){
}

destroyGameScreen(){
}

createGameOver(){
}

destroyGameOver(){
}


````
__Game.js__

````
class Game {
this.brains;
this.player;
this.gameover;
this.score;

}

evenHandlers(keys){
}

collision(){
}


updateScore(){
}

drawScore(){
}
````
__Player.js__

````
function Player(){
  this.width;
  this.height;
  this.image;
  this.lifes;
};

drawPlayer(){
}

Player.move();
````

__Brains.js__

````
class Items{
  this.width;
  this.height;
  this.image;
  this.score;
  draw(){
  }
}

class brains extends Items {
this.width;
  this.height;
  this.image;
  this.score;
  this.x;
  this.y;
   draw(){
  }
}

class singers extends Items {
this.width;
  this.height;
  this.image;
  this.score;
  this.x;
  this.y;
   draw(){
  }
}


````
