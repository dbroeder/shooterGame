export class SecondScene extends Phaser.Scene{
    constructor(){
        super({key: 'SecondScene'})
    }

    create(){
        this.add.text(10,10,'Welcome to the second level')
    }
}
