var numero = 1
var multiplicacao = 1
var resultado

while (multiplicacao <= 10) {
    while (numero < 10) {
        resultado = numero * multiplicacao
        alert(+numero + "x" + multiplicacao + "=" + resultado)
        numero++
    }
    multiplicacao++
    numero = 1
}