let Reading = 0
function Pause500Clear () {
    basic.pause(500)
    basic.clearScreen()
}
function readLightLevel () {
    basic.pause(500)
    basic.showNumber(input.lightLevel())
    basic.pause(1000)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() == 0) {
        Pause500Clear()
        basic.showIcon(IconNames.Sad)
        Clear500Pause()
        basic.showString("NULL")
    } else if (input.lightLevel() <= 75) {
        Pause500Clear()
        basic.showIcon(IconNames.Asleep)
        Clear500Pause()
        basic.showString("Hello?")
    } else if (input.lightLevel() > 75 && input.lightLevel() <= 110) {
        basic.showString("Dim")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.SmallDiamond)
        basic.clearScreen()
        basic.pause(500)
        readLightLevel()
    } else if (input.lightLevel() > 110 && input.lightLevel() <= 200) {
        basic.showString("Perfect")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        basic.pause(500)
        readLightLevel()
    } else if (input.lightLevel() > 200) {
        basic.showString("Yowsa!")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Target)
        basic.clearScreen()
        basic.pause(500)
        readLightLevel()
    }
})
function Clear500Pause () {
    basic.clearScreen()
    basic.pause(500)
    readLightLevel()
}
basic.forever(function () {
    Reading = input.lightLevel()
    led.plotBarGraph(
    Reading,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(Reading)
    }
})
