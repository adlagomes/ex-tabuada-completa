let lista = document.getElementById("seltab")

function tabuada(){
  let numero = document.getElementById("txtn").value
  n = Number(numero)
  const soma = document.getElementById('soma')
  const sub = document.getElementById('sub')
  const mult = document.getElementById('mult')
  const div = document.getElementById('div')

  if(numero.length == 0){
    alert("Por favor, escolha um número de 1 a 10!")
  }else if(soma.checked) {
    lista.innerHTML = ""
    for(let c = 1;c <= 10; c++){
      let item = document.createElement('option')
      item.text = `${n} + ${c} = ${n + c}`
      lista.appendChild(item)
    }
  } else if(sub.checked) {
    lista.innerHTML = ""
    for(let c = 1; c <= 10; c++){
      let item = document.createElement('option')
      item.text = `${n} - ${c} = ${n - c}`
      lista.appendChild(item)
    }
  } else if(mult.checked) {
    lista.innerHTML = ""
    for(let c = 1; c <= 10; c++){
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      lista.appendChild(item)
    }
  } else if(div.checked) {
    lista.innerHTML = ""
    for(let c = 1; c <= 10; c++){
      let item = document.createElement('option')
      let resultado = (n / c) 
      item.text = `${n} : ${c} = ${resultado.toFixed(1)}`
      lista.appendChild(item)
    }
  }
}

function limpar() {
  document.getElementById('txtn').value = "";
  document.getElementById("seltab").value = "";
  lista.innerHTML = ""
}