// spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame, pointValue)
        scene.add.existing(this)
        this.points = pointValue
        this.moveSpeed = 3
    }

    update() {
        // scroll spaceships left
        this.x -= this.moveSpeed

        // wrap around
        if (this.x <= 0 - this.width) {
            this.x = game.config.width
        }
    }
}