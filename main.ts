input.onPinPressed(TouchPin.P0, function () {
    晃動次數 = 0
})
input.onGesture(Gesture.Shake, function () {
    晃動次數 += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(晃動次數)
})
let 晃動次數 = 0
晃動次數 = 0
