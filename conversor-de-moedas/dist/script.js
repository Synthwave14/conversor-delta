var complemento1 = "O Dólar hoje está equivalendo a R$ "
var complemento2 = "O Euro hoje está equivalendo a R$ "
var complemento3 = "O Bitcoin hoje está equivalendo a R$ "
var complemento4 = "O Lei Romeno hoje está equivalendo a R$ "

function ConverterUsd() {
  var valor = parseFloat(document.getElementById("valor").value) * 5.8
  var exibir = document.getElementById("valorConvertido")
  exibir.innerHTML = complemento1 + valor
}

function ConverterEur() {
  var valor = parseFloat(document.getElementById("valor").value) * 5.58
  var exibir = document.getElementById("valorConvertido")
  exibir.innerHTML = complemento2 + valor
}

function ConverterBtc() {
  var valor = parseFloat(document.getElementById("valor").value) * 198.545
  var exibir = document.getElementById("valorConvertido")
  exibir.innerHTML = complemento3 + valor.toFixed(2)
}

function ConverterLei() {
  var valor = parseFloat(document.getElementById("valor").value) * 1.13
  var exibir = document.getElementById("valorConvertido")
  exibir.innerHTML = complemento4 + valor
}