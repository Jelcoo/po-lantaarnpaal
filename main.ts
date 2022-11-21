radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0 || receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P0, receivedNumber)
    } else if (receivedNumber == 2) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
radio.setGroup(88)
