// Configuración Bluetooth al iniciar
bluetooth.onBluetoothConnected(function () {
    // Muestra "sí" cuando está conectado
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    // Muestra "no" cuando está desconectado
    basic.showIcon(IconNames.No)
})
let accelerationZ = 0
let accelerationY = 0
let accelerationX = 0
let jsonData = ""
// Habilita el servicio de UART
bluetooth.startUartService()
// Configuración al iniciar
basic.forever(function () {
    // Lee los datos del acelerómetro
    accelerationX = input.acceleration(Dimension.X)
    accelerationY = input.acceleration(Dimension.Y)
    accelerationZ = input.acceleration(Dimension.Z)
    // Muestra una cara feliz si se agita el micro:bit (opcional, para depuración)
    if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.clearScreen()
    }
    // Envía los datos del acelerómetro por Bluetooth
    // Usamos el servicio de dispositivo (Device Information Service)
    // Para simplificar, enviaremos los valores como strings o números en un servicio personalizado
    // Para este ejemplo, simularemos un servicio personalizado, ya que el servicio de dispositivo
    // no está diseñado para datos de acelerómetro dinámicos.
    // Para una implementación más robusta, deberías definir un servicio Bluetooth personalizado.
    // Sin embargo, para una demostración sencilla, podemos usar la consola serie o un truco.
    // **Importante:** La implementación de Bluetooth en Micro:bit MakeCode es simplificada.
    // Para enviar datos del acelerómetro, lo más común es usar el servicio de UART.
    bluetooth.uartWriteString("" + accelerationX + ".0")
    // Envía cada 100ms
    basic.pause(1000)
})
