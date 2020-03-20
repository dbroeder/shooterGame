import 'phaser';

import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';


export var gameSettings = {
	playerSpeed: 200,
	maxPowerups: 2,
	powerUpVel: 50,
  }
  
  var config = {
	width: 256,
	height: 272,
	backgroundColor: 0x000000,
	scene: [Scene1, Scene2],
	pixelArt: true,
	physics: {
	  default: "arcade",
	  arcade:{
		  debug: false,
		  debugShowVelocity: false
	  }
	}
  }
  
  
  var game = new Phaser.Game(config);