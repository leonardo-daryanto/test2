//% weight=100 color=#5499C7 icon=T

namespace text {
    /**
     *  make text to make a story e.g.: str: today, str2: we are str3: going to str4: make otherText: a robot unlike ever seen!
     */
    //% block
    export function joinTextToSay(str: string, str2: string, str3: string, str4: string, otherText: string): void {
        let mySprite = sprites.create(img`
             e e e . . . . e e e . . . .
             c d d c . . c d d c . . . .
             c b d d f f d d b c . . . .
             c 3 b d d b d b 3 c . . . .
             f b 3 d d d d 3 b f . . . .
             e d d d d d d d d e . . . .
             e d f d d d d f d e . b f b
             f d d f d d f d d f . f d f
             f b d d b b d d 2 f . f d f
             . f 2 2 2 2 2 2 b b f f d f
             . f b d d d d d d b b d b f
             . f d d d d d b d d f f f .
             . f d f f f d f f d f . . .
             . f f . . f f . . f f . . .
         `, SpriteKind.Player)
        story.spriteSayText(mySprite, str + str2 + str3 + str4 + otherText)
             
    }
}
