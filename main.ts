input.onButtonPressed(Button.A, function () {
    basic.showNumber(StandServo)
})
let StandPot = 0
let StandServo = 0
led.plot(2, 0)
basic.forever(function () {
    StandPot = pins.analogReadPin(AnalogPin.P0)
    StandServo = pins.map(
    StandPot,
    0,
    1023,
    0,
    180
    )
    pins.servoWritePin(AnalogPin.P1, StandServo)
})
