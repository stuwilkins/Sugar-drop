sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.coolRadial, 200)
    info.changeScoreBy(-1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(6)
mySprite = sprites.create(img`
    . . . . . . b b b b a a . . . . 
    . . . . b b d d d 3 3 3 a a . . 
    . . . b d d 9 9 3 3 5 3 3 a a . 
    . . b d d 3 3 3 5 3 3 3 3 3 a . 
    . b 3 d 9 3 5 3 3 b 3 5 3 9 a b 
    . b 3 3 3 3 3 a a 3 5 3 3 3 a b 
    b 3 3 3 5 3 a a 3 3 5 3 d a 4 b 
    b 3 5 3 3 b a 3 3 5 3 3 d a 4 b 
    b 3 5 3 3 3 3 5 5 5 3 d a 4 4 e 
    a 3 3 3 5 5 3 5 3 3 d a 4 4 4 e 
    a 3 9 3 3 3 3 9 d d a 4 4 4 e . 
    a a 3 3 3 d d d a a 4 4 4 e e . 
    . e a a a a a a 4 4 4 4 e e . . 
    . . e e b b 4 4 4 4 b e e . . . 
    . . . e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e e 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, randint(-50, 50), 50)
    projectile.setFlag(SpriteFlag.BounceOnWall, true)
})
