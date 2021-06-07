basic.forever(function () {
    if (input.acceleration(Dimension.X) > -50 && input.acceleration(Dimension.X) < 50) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (input.acceleration(Dimension.X) > 50 && input.acceleration(Dimension.X) < 150) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # # . . .
            . # . . .
            . . . . .
            `)
    } else if (input.acceleration(Dimension.X) >= 150 && input.acceleration(Dimension.X) < 1023) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # .
            . # . . .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) < -50 && input.acceleration(Dimension.X) > -150) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # #
            . . . # .
            . . . . .
            `)
    } else if (input.acceleration(Dimension.X) <= -150 && input.acceleration(Dimension.X) < -1023) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
