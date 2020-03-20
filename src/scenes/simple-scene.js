export class SimpleScene extends Phaser.Scene {
  constructor(){
    super({key:'scene1'})
    
  }
  
  preload() {
    this.load.image('cokecan', 'assets/cokecan.png');
    this.load.image('straw','assets/kisspng-drinking-straw-toy-balloon-plastic-canudo-5b2d67365665c2.0864657515297021983539.png')
    this.load.image('block','assets/rectangle.png')
  }

  create() {
    this.score=0;
    this.straw=this.physics.add.staticImage(200,100,'straw')
    //this.straw.setCollideWorldBounds(true)
    this.straw.setScale(1)
    this.player =this.physics.add.sprite(10,10,'cokecan')
    this.player.setCollideWorldBounds(true)
    this.player.setBounce(0.2)
    this.player.setScale(0.5)
    this.cursors= this.input.keyboard.createCursorKeys();
    this.physics.add.overlap(this.player,this.straw,(player,straw)=>{
      console.log("hit")
      straw.destroy()
    })
    this.blocks = this.physics.add.staticGroup()
    this.blocks.create(100,300,'block')
    this.blocks.create(400,100,'block')
    
    this.physics.add.collider(this.player,this.blocks)
    console.log(this.cameras.main.width)

  }
  updateScore(){
    this.add.text(100, 100, 'jumps: '+this.score, { fill: '#0f0' });
  }
  update(){
    this.blocks.children.iterate((block)=>{
      block.y++
      block.refreshBody()
      if(block.y==this.cameras.main.height){
        block.x=100
        block.y=100
      }
    })
    if(this.cursors.right.isDown){
      this.player.setVelocityX(200)
    }else if(this.cursors.left.isDown){
      this.player.setVelocityX(-200)
    }else(
      this.player.setVelocityX(0)
    )
    if(this.cursors.space.isDown){
      this.player.setVelocityY(-500)
    }
    
  }
}