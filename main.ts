basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(y, 4 - x)
            led.plot(x, 4 - y)
        }
        basic.pause(500)
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4 - x; y++) {
            led.unplot(y, x)
            led.unplot(4 - x, x + y)
        }
        basic.pause(500)
    }
})
