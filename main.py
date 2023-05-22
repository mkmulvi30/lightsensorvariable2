def readLightLevel():
    basic.pause(500)
    basic.show_number(input.light_level())
    basic.pause(1000)
    basic.clear_screen()

def on_forever():
    if input.light_level() <= 75:
        basic.show_string("Too Dark!")
        basic.pause(500)
        basic.clear_screen()
        basic.show_icon(IconNames.SAD)
        basic.clear_screen()
        readLightLevel()
    elif input.light_level() > 75 and input.light_level() <= 110:
        basic.show_string("Let there be light")
        basic.pause(500)
        basic.clear_screen()
        basic.show_icon(IconNames.YES)
        basic.clear_screen()
        readLightLevel()
    elif input.light_level() > 110 and input.light_level() <= 200:
        basic.show_string("Glimmer of Hope")
        basic.pause(500)
        basic.clear_screen()
        basic.show_icon(IconNames.HAPPY)
        basic.clear_screen()
        readLightLevel()
    elif input.light_level() > 200:
        basic.show_string("Yowsa!")
        basic.pause(500)
        basic.clear_screen()
        basic.show_icon(IconNames.TARGET)
        basic.clear_screen()
        readLightLevel()
basic.forever(on_forever)
