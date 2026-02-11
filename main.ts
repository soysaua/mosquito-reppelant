let mySprite = sprites.create(assets.image`heroWalkFront1`, SpriteKind.Player)
controller.moveSprite(mySprite)
forever(function () {
    if (controller.up.isPressed()) {
        mySprite = sprites.create(assets.image`heroWalkBack1`, SpriteKind.Player)
    }
    if (controller.down.isPressed()) {
        mySprite = sprites.create(assets.image`heroWalkFront1`, SpriteKind.Player)
    }
})
