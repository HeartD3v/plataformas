namespace SpriteKind {
    export const Jugador = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Jugador.vy = -300
})
scene.onOverlapTile(SpriteKind.Jugador, assets.tile`Moneda`, function (sprite, location) {
    info.changeScoreBy(1)
    sprites.destroy(mySprite)
})
let mySprite: Sprite = null
let Jugador: Sprite = null
tiles.setCurrentTilemap(tilemap`Mapa1`)
Jugador = sprites.create(assets.image`SpriteJugador`, SpriteKind.Jugador)
info.setLife(7)
controller.moveSprite(Jugador, 100, 0)
Jugador.ay = 800
scene.cameraFollowSprite(Jugador)
tiles.placeOnRandomTile(Jugador, assets.tile`SpriteSpawn1`)
info.setScore(0)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
