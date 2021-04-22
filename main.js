  //Evan Kramer
  //Rocket Patrol
  //4/21/2021
  //7 hours

  //Included Mods:

  //Simultaneous two-player mode (30)
  //Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (20)
  //Redsign the game's artwork, UI, and Sound to change its theme/aesthetic (to something other than sci-fi) (60)
  
  
  
  let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play, PlayCoop ]
  }

  let game = new Phaser.Game(config);

  // set UI sizes
  let borderUISize = game.config.height / 15;
  let borderPadding = borderUISize / 3;

  // reserve keyboard vars
  let keyF, keyR, keyLEFT, keyRIGHT, keyA, keyD, keyW;
