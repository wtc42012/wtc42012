forever(function () {
    if (randint(1, 8) == 1) {
        music.beamUp.playUntilDone()
    } else {
        music.baDing.playUntilDone()
    }
})
