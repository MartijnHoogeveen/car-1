basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ff00)
    if (cuteBot.trackSide(cuteBot.MbPins.Left, cuteBot.MbEvents.FindLine)) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.moveTime(cuteBot.Direction.right, 50, 2)
    } else if (cuteBot.trackSide(cuteBot.MbPins.Right, cuteBot.MbEvents.FindLine)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
        cuteBot.moveTime(cuteBot.Direction.left, 50, 2)
    } else {
        cuteBot.forward()
    }
})
basic.forever(function () {
    music.playTone(587, music.beat(BeatFraction.Sixteenth))
    basic.showIcon(IconNames.Heart)
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
    basic.showIcon(IconNames.SmallHeart)
})
