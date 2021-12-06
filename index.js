var button = document.getElementById("btn_add");
var button2 = document.getElementById("btn_total");
var input = document.getElementById("input_valor");
var span = document.getElementById("lbl_qtnitens");
var span2 = document.getElementById("lbl_conta");

var array = [];
var total = 0;

function quandoclicar() {
    if (input.value) {
        array.push(input.value)
        input.value = ''
    } else {
        alert('Adicione um valor, para continuar!!!!')
    }
    span.textContent = array.length;
}

function somatotal() {
    if (array.length >= 1) {
        for (let i = 0; i < array.length; i++) {
            total += parseFloat(array[i])
        }
        span2.textContent = total.toFixed(2)
    } else {
        alert('Voce precisa adicionar algum item');
    }
}

button.addEventListener("click", quandoclicar);
button2.addEventListener("click", somatotal);