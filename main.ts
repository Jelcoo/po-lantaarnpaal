radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0 || receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P0, receivedNumber)
    }
})
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
radio.setGroup(88)
