function tabuada() {
    var tab = document.getElementById('tab')
    var num1 = document.getElementById('num')
    if (num1.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num1.value)
        var c = 1
        tab.innerHTML = ''
        while( c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++ 
        }
    
    }

}
function limpar() {
   tab.innerHTML = '<option>Digite outro valor</option>'
}
