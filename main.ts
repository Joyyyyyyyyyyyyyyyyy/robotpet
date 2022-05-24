function 圓形 () {
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    robotbit.GeekServo(robotbit.Servos.S1, 0)
    左轉()
    左轉()
    左轉()
    左轉()
    左轉()
    basic.pause(1000)
    robotbit.MotorStopAll()
}
function 虛線 () {
    for (let index = 0; index < 4; index++) {
        放下()
        basic.pause(1000)
        任意前進或後退(150, 200)
        basic.pause(1000)
        robotbit.GeekServo(robotbit.Servos.S1, 90)
        basic.pause(1000)
        任意前進或後退(150, 200)
        basic.pause(1000)
    }
    robotbit.MotorStopAll()
}
function 左轉 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    255,
    robotbit.Motors.M1B,
    -202
    )
    basic.pause(350)
    robotbit.MotorStopAll()
}
function 右轉 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -200,
    robotbit.Motors.M1B,
    200
    )
    basic.pause(350)
    robotbit.MotorStopAll()
}
input.onButtonPressed(Button.A, function () {
    if (功能編號 == 1) {
        功能編號 = 5
        basic.showNumber(功能編號)
    } else {
        功能編號 += -1
        basic.showNumber(功能編號)
    }
})
function 開機打招呼 () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . . . #
            . # . # .
            # . . . #
            . . . . .
            . # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # . # .
            . . # . .
            `)
        basic.pause(100)
    }
    robotbit.GeekServo(robotbit.Servos.S1, 120)
    basic.pause(500)
    robotbit.GeekServo(robotbit.Servos.S1, 0)
    music.playMelody("D G C5 - C5 B A A ", 1000)
}
function 正方形 () {
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        robotbit.GeekServo2KG(robotbit.Servos.S1, 0)
        任意前進或後退(150, 500)
        basic.pause(1000)
        robotbit.GeekServo(robotbit.Servos.S1, 90)
        basic.pause(1000)
        任意前進或後退(150, 200)
        basic.pause(1000)
        左轉()
        basic.pause(1000)
        任意前進或後退(-150, 450)
        basic.pause(1000)
    }
    robotbit.MotorStopAll()
}
function 放下 () {
    robotbit.GeekServo(robotbit.Servos.S1, 0)
    music.playMelody("C5 - C C - - - - ", 903)
}
input.onButtonPressed(Button.AB, function () {
    if (功能編號 == 1) {
        直線()
    } else if (功能編號 == 2) {
        虛線()
    } else if (功能編號 == 3) {
        摩斯密碼()
    } else if (功能編號 == 4) {
        圓形()
    } else if (功能編號 == 5) {
        正方形()
    } else if (功能編號 == 6) {
        自定義()
    }
})
input.onButtonPressed(Button.B, function () {
    if (功能編號 == 5) {
        功能編號 = 1
        basic.showNumber(功能編號)
    } else {
        功能編號 += 1
        basic.showNumber(功能編號)
    }
})
function 自定義 () {
	
}
function 直線 () {
    robotbit.GeekServo(robotbit.Servos.S1, 0)
    任意前進或後退(150, 500)
    robotbit.MotorStopAll()
}
function 任意前進或後退 (速度: number, 時間: number) {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    速度,
    robotbit.Motors.M1B,
    速度
    )
    basic.pause(時間)
    robotbit.MotorStopAll()
}
function 摩斯密碼 () {
    for (let index = 0; index < 4; index++) {
        servos.P0.setRange(0, 50)
        任意前進或後退(150, 500)
        servos.P0.stop()
        servos.P0.run(50)
        任意前進或後退(150, 500)
    }
    robotbit.MotorStopAll()
}
let 功能編號 = 0
開機打招呼()
功能編號 = 1
basic.showNumber(功能編號)
