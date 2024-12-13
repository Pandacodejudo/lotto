input.onButtonPressed(Button.A, function () {
    if (PlayerCode[Current_number] < 9) {
        PlayerCode[Current_number] = PlayerCode[Current_number] + 1
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(PlayerCode[Current_number])
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Current_number < 2) {
        Current_number += 1
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(PlayerCode[Current_number])
    } else {
        COMPUTERCODE = [randint(0, 9), randint(0, 9), randint(0, 9)]
        for (let Index = 0; Index <= 2; Index++) {
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(COMPUTERCODE[Index])
        }
        for (let Index = 0; Index <= COMPUTERCODE.length - 1; Index++) {
            if (COMPUTERCODE[Index] == PlayerCode[Index]) {
                basic.clearScreen()
                basic.pause(100)
                basic.showLeds(`
                    . # . # .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
                basic.pause(500)
            } else {
                basic.clearScreen()
                basic.pause(100)
                basic.showLeds(`
                    . # . # .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
                    `)
                basic.pause(500)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (PlayerCode[Current_number] > 0) {
        PlayerCode[Current_number] = PlayerCode[Current_number] - 1
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(PlayerCode[Current_number])
    }
})
let COMPUTERCODE: number[] = []
let Current_number = 0
let PlayerCode: number[] = []
PlayerCode = [5, 5, 5]
Current_number = 0
basic.clearScreen()
basic.pause(100)
basic.showNumber(PlayerCode[Current_number])
basic.forever(function () {
	
})
